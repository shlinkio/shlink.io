<?php
use Shlinkio\Website\Middleware\CacheMiddleware;
use Shlinkio\Website\Middleware\RouteResultExtensionMiddleware;
use Zend\Expressive\Container\ApplicationFactory;
use Zend\Expressive\Helper;
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
                ApplicationFactory::ROUTING_MIDDLEWARE,
                RouteResultExtensionMiddleware::class,
                Helper\UrlHelperMiddleware::class,
                ApplicationFactory::DISPATCH_MIDDLEWARE,
            ],
            'priority' => 1,
        ],

        'error' => [
            'middleware' => [
                // Add error middleware here.
            ],
            'error'    => true,
            'priority' => -10000,
        ],
    ],

];
