<?php
use Shlinkio\Website\Action;

return [

    'routes' => [
        [
            'name' => 'template',
            'path' => '/[{slug}]',
            'middleware' => Action\TemplateAction::class,
            'allowed_methods' => ['GET'],
        ],
        [
            'name' => 'api-docs-section',
            'path' => '/api-docs/{slug}',
            'middleware' => Action\TemplateAction::class,
            'allowed_methods' => ['GET'],
        ],
        [
            'name' => 'api-docs-endpoints-section',
            'path' => '/api-docs/endpoints/{slug}',
            'middleware' => Action\TemplateAction::class,
            'allowed_methods' => ['GET'],
        ],
    ],

];
