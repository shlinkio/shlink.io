<?php
declare(strict_types=1);

namespace Shlink\Website;

use function sprintf;
use function http_build_query;

return [

    'donate' => [
        'url' => sprintf('https://www.paypal.com/cgi-bin/webscr?%s', http_build_query([
            'cmd' => '_donations',
            'business' => 'alejandrocelaya@gmail.com',
            'currency_code' => 'EUR',
        ]))
    ],

];
