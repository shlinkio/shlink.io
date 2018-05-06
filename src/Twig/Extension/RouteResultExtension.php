<?php
namespace Shlinkio\Website\Twig\Extension;

use League\Plates\Engine;
use League\Plates\Extension\ExtensionInterface;
use Zend\Expressive\Router\RouteResult;

class RouteResultExtension implements ExtensionInterface
{
    /**
     * @var RouteResult
     */
    protected $routeResult;

    /**
     * @param RouteResult $routeResult
     * @return $this
     */
    public function setRouteResult($routeResult): self
    {
        $this->routeResult = $routeResult;
        return $this;
    }

    public function register(Engine $engine): void
    {
        $engine->registerFunction('current_route_name', [$this, 'getCurrentRouteName']);
        $engine->registerFunction('current_route_params', [$this, 'getCurrentRouteParams']);
    }

    public function getCurrentRouteName()
    {
        $routeResult = $this->getRouteResult();
        return $routeResult->isSuccess() ? $routeResult->getMatchedRouteName() : null;
    }

    public function getCurrentRouteParams(): array
    {
        $routeResult = $this->getRouteResult();
        return $routeResult->isSuccess() ? $routeResult->getMatchedParams() : [];
    }

    private function getRouteResult(): RouteResult
    {
        if ($this->routeResult === null) {
            throw new \RuntimeException('Route result has not been set');
        }

        return $this->routeResult;
    }
}
