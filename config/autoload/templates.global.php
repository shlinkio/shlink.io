<?php

use Shlinkio\Website\Twig\Extension\RouteResultExtension;

return [

    'templates' => [
        'extension' => 'phtml',
        'paths' => [
            'templates',
        ],
    ],

    'plates' => [
        'extensions' => [
            RouteResultExtension::class,
        ],
    ],

];
