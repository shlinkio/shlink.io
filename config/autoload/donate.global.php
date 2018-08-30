<?php
declare(strict_types=1);

namespace Shlink\Website;

return [

    'donate' => [
        'url' => \sprintf('https://www.paypal.com/cgi-bin/webscr?%s', http_build_query([
            'cmd' => '_donations',
            'business' => 'alejandrocelaya@gmail.com',
            'currency_code' => 'EUR',
        ]))
    ],

];
