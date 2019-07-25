<?php
namespace Shlinkio\Website\Action;

use LogicException;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\HtmlResponse;
use Zend\Expressive\Template\TemplateRendererInterface;

class TemplateAction implements MiddlewareInterface
{
    /** @var TemplateRendererInterface */
    private $templateRenderer;

    public function __construct(TemplateRendererInterface $templateRenderer)
    {
        $this->templateRenderer = $templateRenderer;
    }

    public function process(Request $request, RequestHandlerInterface $handler): Response
    {
        // Generate the template name based on the path
        $path = $request->getUri()->getPath();
        $path = substr($path, 1);
        $path = empty($path) ? 'index' : $path;

        // Try to render the template and return a 404 if not found
        try {
            return new HtmlResponse($this->templateRenderer->render($path));
        } catch (LogicException $e) {
            return $handler->handle($request);
        }
    }
}
