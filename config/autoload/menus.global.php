<?php
declare(strict_types=1);

return [

    'menus' => [

        'documentation' => [
            [
                'text' => 'Install docker image',
                'slug' => 'install-docker-image',
            ],
            [
                'text' => 'Install from dist file',
                'slug' => 'install-dist-file',
            ],
            [
                'text' => 'Serve with swoole',
                'slug' => 'serve-with-swoole',
            ],
            [
                'text' => 'Classic web server',
                'slug' => 'classic-web-server',
            ],
            [
                'text' => 'Long-running tasks',
                'slug' => 'long-running-tasks',
            ],
        ],

        'api-docs' => [
            [
                'text' => 'Error Management',
                'slug' => 'error-management',
            ],
            [
                'text' => 'Authentication',
                'slug' => 'authentication',
            ],
            [
                'text' => 'Endpoints',
                'link' => '/swagger-ui/index.html',
            ],
        ],

    ],

];
