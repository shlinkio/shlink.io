<?php
declare(strict_types=1);

use Zend\ConfigAggregator;
use Zend\Expressive;

return (new ConfigAggregator\ConfigAggregator([
    Expressive\ConfigProvider::class,
    Expressive\Router\ConfigProvider::class,
    Expressive\Router\FastRouteRouter\ConfigProvider::class,
    Expressive\Plates\ConfigProvider::class,
    Expressive\Helper\ConfigProvider::class,
    new ConfigAggregator\ZendConfigProvider('config/autoload/{{,*.}global,{,*.}local}.php'),
], 'data/cache/app_config.php'))->getMergedConfig();
