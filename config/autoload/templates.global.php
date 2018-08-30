<?php

use Shlinkio\Website\Template\Extension;

return [

    'templates' => [
        'extension' => 'phtml',
        'paths' => [
            'templates',
        ],
    ],

    'plates' => [
        'extensions' => [
            Extension\RouteResultExtension::class,
            Extension\ConfigParamsExtension::class,
        ],
    ],

];
