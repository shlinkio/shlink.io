<?php

use Doctrine\Common\Cache;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Shlinkio\Website\Action;
use Shlinkio\Website\Factory\CacheDelegator;
use Shlinkio\Website\Middleware;
use Shlinkio\Website\Twig\Extension\RouteResultExtension;
use Zend\Expressive;
use Zend\Expressive\Container;
use Zend\Expressive\Helper;
use Zend\Expressive\Middleware\ErrorResponseGenerator;
use Zend\Expressive\Response;
use Zend\Expressive\Router;
use Zend\Expressive\Template\TemplateRendererInterface;
use Zend\Expressive\Twig\TwigEnvironmentFactory;
use Zend\Expressive\Twig\TwigRendererFactory;
use Zend\HttpHandlerRunner\Emitter\EmitterInterface;
use Zend\HttpHandlerRunner\RequestHandlerRunner;
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
            Expressive\Application::class => Container\ApplicationFactory::class,
            Expressive\MiddlewareFactory::class => Container\MiddlewareFactoryFactory::class,
            Expressive\MiddlewareContainer::class => Container\MiddlewareContainerFactory::class,
            Helper\UrlHelper::class => Helper\UrlHelperFactory::class,
            Helper\ServerUrlMiddleware::class => Helper\ServerUrlMiddlewareFactory::class,
            Helper\UrlHelperMiddleware::class => Helper\UrlHelperMiddlewareFactory::class,
            TemplateRendererInterface::class => TwigRendererFactory::class,
            \Twig_Environment::class => TwigEnvironmentFactory::class,
            ErrorHandler::class => Container\ErrorHandlerFactory::class,
            ErrorResponseGenerator::class => Container\ErrorResponseGeneratorFactory::class,
            'Zend\Expressive\ApplicationPipeline' => Container\ApplicationPipelineFactory::class,
            Router\RouteCollector::class => Router\RouteCollectorFactory::class,
            RequestHandlerRunner::class => Container\RequestHandlerRunnerFactory::class,
            EmitterInterface::class => Container\EmitterFactory::class,
            ServerRequestInterface::class => Container\ServerRequestFactoryFactory::class,
            ResponseInterface::class => Container\ResponseFactoryFactory::class,
            Response\ServerRequestErrorResponseGenerator::class
                => Container\ServerRequestErrorResponseGeneratorFactory::class,
            Router\Middleware\RouteMiddleware::class => Router\Middleware\RouteMiddlewareFactory::class,
            Router\Middleware\DispatchMiddleware::class => Router\Middleware\DispatchMiddlewareFactory::class,
            Expressive\Handler\NotFoundHandler::class => Container\NotFoundHandlerFactory::class,

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
            Expressive\Application::class => [
                Container\ApplicationConfigInjectionDelegator::class,
            ],
        ],
    ],

];
