<?php
declare(strict_types=1);

use Shlinkio\Website\Middleware;
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
                Middleware\RedirectionMiddleware::class,
                Middleware\CacheMiddleware::class,
                Helper\ServerUrlMiddleware::class,
            ],
            'priority' => 10000,
        ],

        'routing' => [
            'middleware' => [
                RouteMiddleware::class,
                Middleware\RouteResultExtensionMiddleware::class,
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
