<?php
declare(strict_types=1);

namespace Shlinkio\Website\Middleware;

use Doctrine\Common\Cache\Cache;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\HtmlResponse;

use function in_array;

class CacheMiddleware implements MiddlewareInterface
{
    private const EXCLUDED_PATHS = [
        '/short-code-chars'
    ];

    /**
     * @var Cache
     */
    private $cache;

    public function __construct(Cache $cache)
    {
        $this->cache = $cache;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $uri = $request->getUri();
        $path = $uri->getPath();
        if (in_array($path, self::EXCLUDED_PATHS, true)) {
            return $handler->handle($request);
        }

        $cacheKey= sprintf('%s://%s/%s', $uri->getScheme(), $uri->getAuthority(), $path);
        if ($this->cache->contains($cacheKey)) {
            return new HtmlResponse($this->cache->fetch($cacheKey));
        }

        $resp = $handler->handle($request);
        $this->cache->save($cacheKey, (string) $resp->getBody());
        return $resp;
    }
}
