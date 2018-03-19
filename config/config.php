<?php
declare(strict_types=1);

use Zend\ConfigAggregator;

return (new ConfigAggregator\ConfigAggregator([
    new ConfigAggregator\ZendConfigProvider('config/autoload/{{,*.}global,{,*.}local}.php'),
], 'data/cache/app_config.php'))->getMergedConfig();
