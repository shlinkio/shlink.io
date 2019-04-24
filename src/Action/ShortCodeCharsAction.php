<?php
declare(strict_types=1);

namespace Shlinkio\Website\Action;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\TextResponse;

use function str_shuffle;

class ShortCodeCharsAction implements RequestHandlerInterface
{
    private const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        return new TextResponse(str_shuffle(self::BASE62));
    }
}
