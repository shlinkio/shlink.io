<?php
namespace Shlinkio\Website\Middleware;

use Interop\Http\ServerMiddleware\DelegateInterface;
use Interop\Http\ServerMiddleware\MiddlewareInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Shlinkio\Website\Twig\Extension\RouteResultExtension;
use Zend\Expressive\Router\RouteResult;

class RouteResultExtensionMiddleware implements MiddlewareInterface
{
    /**
     * @var RouteResultExtension
     */
    private $extension;

    public function __construct(RouteResultExtension $extension)
    {
        $this->extension = $extension;
    }

    /**
     * Process an incoming server request and return a response, optionally delegating
     * to the next middleware component to create the response.
     *
     * @param Request $request
     * @param DelegateInterface $delegate
     *
     * @return Response
     */
    public function process(Request $request, DelegateInterface $delegate)
    {
        $result = $request->getAttribute(RouteResult::class, false);

        if ($result instanceof RouteResult) {
            $this->extension->setRouteResult($result);
        }

        return $delegate->process($request);
    }
}
