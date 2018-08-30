<?php

use Doctrine\Common\Cache;
use Shlinkio\Website\Action;
use Shlinkio\Website\Factory\CacheDelegator;
use Shlinkio\Website\Middleware;
use Shlinkio\Website\Template\Extension;
use Zend\Expressive;
use Zend\ServiceManager\AbstractFactory\ConfigAbstractFactory;

return [

    'dependencies' => [
        'invokables' => [
            Cache\ApcuCache::class => Cache\ApcuCache::class,
            Extension\RouteResultExtension::class => Extension\RouteResultExtension::class,
        ],
        'factories' => [
            // Actions
            Action\TemplateAction::class => Action\TemplateActionFactory::class,

            // Middleware
            Middleware\CacheMiddleware::class => Middleware\CacheMiddlewareFactory::class,
            Middleware\RouteResultExtensionMiddleware::class => Middleware\RouteResultExtensionMiddlewareFactory::class,

            // Template extensions
            Extension\ConfigParamsExtension::class => ConfigAbstractFactory::class,
        ],
        'aliases' => [
            Cache\Cache::class => Cache\ApcuCache::class,
        ],
        'delegators' => [
            Cache\ApcuCache::class => [
                CacheDelegator::class,
            ],
            Expressive\Application::class => [
                Expressive\Container\ApplicationConfigInjectionDelegator::class,
            ],
        ],
    ],

    ConfigAbstractFactory::class => [
        Extension\ConfigParamsExtension::class => ['config'],
    ],

];
