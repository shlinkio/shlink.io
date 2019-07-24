<?php
declare(strict_types=1);

use Shlinkio\Website\Action;

return [

    'routes' => [
        [
            'name' => 'short-code-chars',
            'path' => '/short-code-chars',
            'middleware' => Action\ShortCodeCharsAction::class,
            'allowed_methods' => ['GET'],
        ],
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
            'name' => 'getting-started-section',
            'path' => '/getting-started/{slug}',
            'middleware' => Action\TemplateAction::class,
            'allowed_methods' => ['GET'],
        ],
    ],

];
