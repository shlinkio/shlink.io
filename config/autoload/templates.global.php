<?php

use Shlinkio\Website\Template\Extension\RouteResultExtension;

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
