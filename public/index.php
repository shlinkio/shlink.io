<?php
declare(strict_types=1);

namespace Shlinkio\Website;

use Psr\Container\ContainerInterface;
use Zend\Expressive\Application;

// Delegate static file requests back to the PHP built-in webserver
if (PHP_SAPI === 'cli-server' && $_SERVER['SCRIPT_FILENAME'] !== __FILE__) {
    return false;
}

chdir(dirname(__DIR__));
require 'vendor/autoload.php';

(function () {
    /** @var ContainerInterface $container */
    $container = require 'config/container.php';
    $container->get(Application::class)->run();
})();
