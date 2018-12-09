<?php
declare(strict_types=1);

namespace Shlinkio\Website\Middleware;

use Fig\Http\Message\RequestMethodInterface as RequestMethod;
use Fig\Http\Message\StatusCodeInterface as StatusCode;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\RedirectResponse;
use Zend\Diactoros\Uri;
use function array_key_exists;
use function http_build_query;

class RedirectionMiddleware implements MiddlewareInterface
{
    /** @var array */
    private $redirectionMap;

    public function __construct(array $redirectionMap)
    {
        $this->redirectionMap = $redirectionMap;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $path = $request->getUri()->getPath();
        $method = $request->getMethod();

        if ($method === RequestMethod::METHOD_GET && array_key_exists($path, $this->redirectionMap)) {
            $query = $request->getQueryParams();
            $uri = (new Uri($this->redirectionMap[$path]))->withQuery(http_build_query($query));

            return new RedirectResponse($uri, StatusCode::STATUS_MOVED_PERMANENTLY);
        }

        return $handler->handle($request);
    }
}
