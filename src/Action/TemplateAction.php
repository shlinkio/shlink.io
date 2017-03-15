<?php
namespace Shlinkio\Website\Action;

use Interop\Http\ServerMiddleware\DelegateInterface;
use Interop\Http\ServerMiddleware\MiddlewareInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\HtmlResponse;
use Zend\Expressive\Template\TemplateRendererInterface;

class TemplateAction implements MiddlewareInterface
{
    /**
     * @var TemplateRendererInterface
     */
    private $templateRenderer;

    /**
     * @param TemplateRendererInterface $templateRenderer
     */
    public function __construct(TemplateRendererInterface $templateRenderer)
    {
        $this->templateRenderer = $templateRenderer;
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
        // Generate the template name based on the path
        $path = $request->getUri()->getPath();
        $path = substr($path, 1);
        $path = empty($path) ? 'index' : $path;

        // Try to render the template and return a 404 if not found
        try {
            return new HtmlResponse($this->templateRenderer->render($path . '.html.twig', [
                'template' => $path,
            ]));
        } catch (\Twig_Error_Loader $e) {
            return $delegate->process($request);
        }
    }
}
