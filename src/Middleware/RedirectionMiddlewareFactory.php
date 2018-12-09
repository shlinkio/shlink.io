<?php
declare(strict_types=1);

namespace Shlinkio\Website\Middleware;

use Interop\Container\ContainerInterface;
use Zend\ServiceManager\Factory\FactoryInterface;

class RedirectionMiddlewareFactory implements FactoryInterface
{
    public function __invoke(ContainerInterface $container, $requestedName, array $options = null)
    {
        $redirectionMap = $container->get('config')['redirection_map'] ?? [];
        return new RedirectionMiddleware($redirectionMap);
    }
}
