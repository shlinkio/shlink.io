<?php
declare(strict_types=1);

namespace Shlinkio\Website\Template\Extension;

use League\Plates\Engine;
use League\Plates\Extension\ExtensionInterface;
use Zend\Expressive\Template\TemplateRendererInterface;
use function sprintf;

class MenusExtension implements ExtensionInterface
{
    /** @var Engine|null */
    private $renderer;
    /** @var array */
    private $menusConfig;

    public function __construct(array $config)
    {
        $this->menusConfig = $config['menus'] ?? [];
    }

    public function register(Engine $engine): void
    {
        $this->renderer = $engine; // Cannot do regular constructor injection because it causes a circular dependency
        $engine->registerFunction('render_menu', [$this, 'renderMenu']);
    }

    public function renderMenu(string $menuName): string
    {
        if ($this->renderer === null) {
            return $this->renderError('Renderer not yet initialized.');
        }

        $menuConfig = $this->menusConfig[$menuName] ?? null;
        if ($menuConfig === null) {
            return $this->renderError(sprintf('Could not find menu config for menu with name "%s"', $menuName));
        }

        return $this->renderer->render('partials/side-menu', [
            'items' => $menuConfig,
            'menuName' => $menuName,
        ]);
    }

    private function renderError(string $message): string
    {
        return sprintf('<i style="color: red">%s</i>', $message);
    }
}
