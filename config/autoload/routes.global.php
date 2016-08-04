<?php

use Shlinkio\Website\Action;

return [

    'routes' => [
        [
            'name' => 'template',
            'path' => '/[{template:index|installation|api-docs}]',
            'middleware' => Action\TemplateAction::class,
            'allowed_methods' => ['GET'],
        ],
        [
            'name' => 'api-docs-section',
            'path' => '/api-docs/{template}',
            'middleware' => Action\TemplateAction::class,
            'allowed_methods' => ['GET'],
        ],
    ],

];
