<?php
use Shlinkio\Website\Middleware\CacheMiddleware;
use Shlinkio\Website\Middleware\RouteResultExtensionMiddleware;
use Zend\Expressive\Container\ApplicationFactory;
use Zend\Expressive\Handler\NotFoundHandler;
use Zend\Expressive\Helper;
use Zend\Expressive\Router\Middleware\DispatchMiddleware;
use Zend\Expressive\Router\Middleware\RouteMiddleware;
use Zend\Stratigility\Middleware\ErrorHandler;

return [

    'middleware_pipeline' => [
        'always' => [
            'middleware' => [
                ErrorHandler::class,
                CacheMiddleware::class,
                Helper\ServerUrlMiddleware::class,
            ],
            'priority' => 10000,
        ],

        'routing' => [
            'middleware' => [
                RouteMiddleware::class,
                RouteResultExtensionMiddleware::class,
                Helper\UrlHelperMiddleware::class,
                DispatchMiddleware::class,
            ],
            'priority' => 1,
        ],

        'error' => [
            'middleware' => [
                NotFoundHandler::class,
            ],
            'error'    => true,
            'priority' => -10000,
        ],
    ],

];
