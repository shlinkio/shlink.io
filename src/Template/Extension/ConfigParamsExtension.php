<?php
declare(strict_types=1);

namespace Shlinkio\Website\Template\Extension;

use League\Plates\Engine;
use League\Plates\Extension\ExtensionInterface;

class ConfigParamsExtension implements ExtensionInterface
{
    /** @var array */
    private $config;

    public function __construct(array $config)
    {
        $this->config = $config;
    }

    public function register(Engine $engine): void
    {
        $engine->registerFunction('config', [$this, 'getConfigParam']);
    }

    public function getConfigParam(string $key)
    {
        return $this->config[$key] ?? null;
    }
}
