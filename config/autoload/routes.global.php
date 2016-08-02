<?php

use Shlinkio\Website\Action;

return [

    'routes' => [
        [
            'name' => 'template',
            'path' => '/[{template:index|install}]',
            'middleware' => Action\TemplateAction::class,
            'allowed_methods' => ['GET'],
        ],
    ],

];
