<?php

use Shlinkio\Website\Twig\Extension\RouteResultExtension;
use Zend\Expressive\Twig\TwigExtension;
use Zend\Expressive\Twig\TwigExtensionFactory;

return [
    'templates' => [
        'extension' => 'html.twig',
        'paths' => [
            'templates',
        ],
    ],

    'twig' => [
        'cache_dir' => 'data/cache/twig',
        'extensions' => [
            RouteResultExtension::class,
            TwigExtension::class,
        ],
    ],

    'dependencies' => [
        'factories' => [
            TwigExtension::class => TwigExtensionFactory::class,
        ],
    ],
];
