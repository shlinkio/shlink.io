<?php
namespace Shlinkio\Website\Twig\Extension;

use Zend\Expressive\Router\RouteResult;

class RouteResultExtension extends \Twig_Extension
{
    /**
     * @var RouteResult
     */
    protected $routeResult;

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return static::class;
    }

    /**
     * @param RouteResult $routeResult
     * @return $this
     */
    public function setRouteResult($routeResult)
    {
        $this->routeResult = $routeResult;
        return $this;
    }

    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('current_route_name', [$this, 'getCurrentRouteName']),
            new \Twig_SimpleFunction('current_route_params', [$this, 'getCurrentRouteParams']),
        ];
    }

    public function getCurrentRouteName()
    {
        $routeResult = $this->getRouteResult();
        return $routeResult->isSuccess() ? $routeResult->getMatchedRouteName() : null;
    }

    public function getCurrentRouteParams()
    {
        $routeResult = $this->getRouteResult();
        return $routeResult->isSuccess() ? $routeResult->getMatchedParams() : [];
    }

    protected function getRouteResult()
    {
        if (! isset($this->routeResult)) {
            throw new \RuntimeException('Route result has not been set');
        }

        return $this->routeResult;
    }
}
