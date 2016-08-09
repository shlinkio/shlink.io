<?php
namespace Shlinkio\Website\Middleware;

use Doctrine\Common\Cache\Cache;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\HtmlResponse;
use Zend\Stratigility\MiddlewareInterface;

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
     * Process an incoming request and/or response.
     *
     * Accepts a server-side request and a response instance, and does
     * something with them.
     *
     * If the response is not complete and/or further processing would not
     * interfere with the work done in the middleware, or if the middleware
     * wants to delegate to another process, it can use the `$out` callable
     * if present.
     *
     * If the middleware does not return a value, execution of the current
     * request is considered complete, and the response instance provided will
     * be considered the response to return.
     *
     * Alternately, the middleware may return a response instance.
     *
     * Often, middleware will `return $out();`, with the assumption that a
     * later middleware will return a response.
     *
     * @param Request $request
     * @param Response $response
     * @param null|callable $out
     * @return null|Response
     */
    public function __invoke(Request $request, Response $response, callable $out = null)
    {
        $uri = $request->getUri();
        $cacheKey= sprintf('%s://%s/%s', $uri->getScheme(), $uri->getAuthority(), $uri->getPath());
        if ($this->cache->contains($cacheKey)) {
            return new HtmlResponse($this->cache->fetch($cacheKey));
        }

        /** @var Response $resp */
        $resp = $out($request, $response);
        $this->cache->save($cacheKey, $resp->getBody()->__toString());
        return $resp;
    }
}
