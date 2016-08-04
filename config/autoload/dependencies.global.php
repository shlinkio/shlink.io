<?php
use Shlinkio\Website\Action;
use Zend\Expressive\Application;
use Zend\Expressive\Container;
use Zend\Expressive\Helper;
use Zend\Expressive\Router;
use Zend\Expressive\Template\TemplateRendererInterface;
use Zend\Expressive\Twig\TwigRendererFactory;

return [

    'dependencies' => [
        'invokables' => [
            Helper\ServerUrlHelper::class => Helper\ServerUrlHelper::class,
            Router\RouterInterface::class => Router\FastRouteRouter::class,
        ],
        'factories' => [
            Application::class => Container\ApplicationFactory::class,
            'Zend\Expressive\FinalHandler' => Container\TemplatedErrorHandlerFactory::class,
            Helper\UrlHelper::class => Helper\UrlHelperFactory::class,
            Helper\ServerUrlMiddleware::class => Helper\ServerUrlMiddlewareFactory::class,
            Helper\UrlHelperMiddleware::class => Helper\UrlHelperMiddlewareFactory::class,
            TemplateRendererInterface::class => TwigRendererFactory::class,

            // Actions
            Action\TemplateAction::class => Action\TemplateActionFactory::class,
            Action\ApiTemplateAction::class => Action\TemplateActionFactory::class,
        ],
    ],

];
