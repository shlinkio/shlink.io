<?php
declare(strict_types=1);

namespace Shlinkio\Website\Middleware;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Shlinkio\Website\Template\Extension\RouteResultExtension;
use Zend\Expressive\Router\RouteResult;

class RouteResultExtensionMiddleware implements MiddlewareInterface
{
    /** @var RouteResultExtension */
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
     * @param RequestHandlerInterface $handler
     *
     * @return Response
     */
    public function process(Request $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $result = $request->getAttribute(RouteResult::class, false);

        if ($result instanceof RouteResult) {
            $this->extension->setRouteResult($result);
        }

        return $handler->handle($request);
    }
}
