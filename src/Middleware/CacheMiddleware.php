<?php
namespace Shlinkio\Website\Middleware;

use Doctrine\Common\Cache\Cache;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\HtmlResponse;

class CacheMiddleware implements MiddlewareInterface
{
    /**
     * @var Cache
     */
    private $cache;

    public function __construct(Cache $cache)
    {
        $this->cache = $cache;
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
        $uri = $request->getUri();
        $cacheKey= sprintf('%s://%s/%s', $uri->getScheme(), $uri->getAuthority(), $uri->getPath());
        if ($this->cache->contains($cacheKey)) {
            return new HtmlResponse($this->cache->fetch($cacheKey));
        }

        /** @var Response $resp */
        $resp = $handler->handle($request);
        $this->cache->save($cacheKey, $resp->getBody()->__toString());
        return $resp;
    }
}
