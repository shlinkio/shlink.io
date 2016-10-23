<?php

use Shlinkio\Website\Twig\Extension\RouteResultExtension;

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
        ],
        'globals' => [
            'version' => '1.3.0',
        ],
    ],
];
