<?php
use Doctrine\Common\Cache;
use Shlinkio\Website\Action;
use Shlinkio\Website\Factory\CacheDelegator;
use Shlinkio\Website\Middleware;
use Shlinkio\Website\Twig\Extension\RouteResultExtension;
use Zend\Expressive\Application;
use Zend\Expressive\Container;
use Zend\Expressive\Helper;
use Zend\Expressive\Middleware\ErrorResponseGenerator;
use Zend\Expressive\Router;
use Zend\Expressive\Template\TemplateRendererInterface;
use Zend\Expressive\Twig\TwigEnvironmentFactory;
use Zend\Expressive\Twig\TwigRendererFactory;
use Zend\Stratigility\Middleware\ErrorHandler;

return [

    'dependencies' => [
        'invokables' => [
            Helper\ServerUrlHelper::class => Helper\ServerUrlHelper::class,
            Router\RouterInterface::class => Router\FastRouteRouter::class,
            Cache\ApcuCache::class => Cache\ApcuCache::class,
            RouteResultExtension::class => RouteResultExtension::class,
        ],
        'factories' => [
            Application::class => Container\ApplicationFactory::class,
            Helper\UrlHelper::class => Helper\UrlHelperFactory::class,
            Helper\ServerUrlMiddleware::class => Helper\ServerUrlMiddlewareFactory::class,
            Helper\UrlHelperMiddleware::class => Helper\UrlHelperMiddlewareFactory::class,
            TemplateRendererInterface::class => TwigRendererFactory::class,
            \Twig_Environment::class => TwigEnvironmentFactory::class,
            ErrorHandler::class => Container\ErrorHandlerFactory::class,
            ErrorResponseGenerator::class => Container\ErrorResponseGeneratorFactory::class,

            // Actions
            Action\TemplateAction::class => Action\TemplateActionFactory::class,

            // Middleware
            Middleware\CacheMiddleware::class => Middleware\CacheMiddlewareFactory::class,
            Middleware\RouteResultExtensionMiddleware::class => Middleware\RouteResultExtensionMiddlewareFactory::class,
        ],
        'aliases' => [
            Cache\Cache::class => Cache\ApcuCache::class,
        ],
        'delegators' => [
            Cache\ApcuCache::class => [
                CacheDelegator::class,
            ],
        ],
    ],

];
