<?php
namespace Shlinkio\Website\Middleware;

use Interop\Container\ContainerInterface;
use Interop\Container\Exception\ContainerException;
use Shlinkio\Website\Template\Extension\RouteResultExtension;
use Zend\ServiceManager\Exception\ServiceNotCreatedException;
use Zend\ServiceManager\Exception\ServiceNotFoundException;
use Zend\ServiceManager\Factory\FactoryInterface;

class RouteResultExtensionMiddlewareFactory implements FactoryInterface
{
    /**
     * Create an object
     *
     * @param  ContainerInterface $container
     * @param  string $requestedName
     * @param  null|array $options
     * @return object
     * @throws ServiceNotFoundException if unable to resolve the service.
     * @throws ServiceNotCreatedException if an exception is raised when
     *     creating a service.
     * @throws ContainerException if any other error occurs
     */
    public function __invoke(ContainerInterface $container, $requestedName, array $options = null)
    {
        $extension = $container->get(RouteResultExtension::class);
        return new RouteResultExtensionMiddleware($extension);
    }
}
