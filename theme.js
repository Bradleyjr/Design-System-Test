const root = document.documentElement;

const savedTheme = window.localStorage.getItem('design-system-theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
}

const updateThemeToggleLabel = (toggle) => {
  if (!toggle) return;
  const theme = root.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
  toggle.textContent = `Switch to ${theme} theme`;
};

const beautifyHTML = (html) => {
  const voidTags = new Set([
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ]);

  const div = document.createElement('div');
  div.innerHTML = html.trim();

  const lines = [];
  const indentChar = '  ';

  const formatNode = (node, depth) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const value = node.textContent.trim();
      if (value) {
        lines.push(`${indentChar.repeat(depth)}${value}`);
      }
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const tag = node.tagName.toLowerCase();
    const attrs = Array.from(node.attributes)
      .map((attr) => `${attr.name}="${attr.value}"`)
      .join(' ');
    const openTag = attrs ? `<${tag} ${attrs}>` : `<${tag}>`;
    lines.push(`${indentChar.repeat(depth)}${openTag}`);

    if (!voidTags.has(tag)) {
      Array.from(node.childNodes).forEach((child) => formatNode(child, depth + 1));
      lines.push(`${indentChar.repeat(depth)}</${tag}>`);
    }
  };

  Array.from(div.childNodes).forEach((child) => formatNode(child, 0));
  return lines.join('\n');
};

const createTab = (name, targetId, isActive = false) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'preview-tab';
  if (isActive) {
    button.classList.add('is-active');
  }
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-selected', String(isActive));
  button.setAttribute('aria-controls', targetId);
  button.setAttribute('tabindex', isActive ? '0' : '-1');
  button.dataset.target = targetId;
  button.textContent = name;
  return button;
};

const enhanceShowcaseCards = () => {
  const cards = document.querySelectorAll('.showcase-card');

  cards.forEach((card, index) => {
    if (card.dataset.enhanced === 'true') return;
    const preview = card.querySelector('.preview');
    if (!preview) return;

    const container = document.createElement('div');
    container.className = 'showcase-panels';
    preview.parentElement.insertBefore(container, preview);
    container.appendChild(preview);

    const codeId = `preview-code-${index}`;
    const previewId = `preview-panel-${index}`;

    preview.setAttribute('role', 'tabpanel');
    preview.id = previewId;
    preview.dataset.state = 'visible';
    preview.setAttribute('aria-hidden', 'false');

    const codePanel = document.createElement('div');
    codePanel.className = 'code-panel';
    codePanel.setAttribute('role', 'tabpanel');
    codePanel.id = codeId;
    codePanel.dataset.state = 'hidden';
    codePanel.setAttribute('aria-hidden', 'true');

    const copy = document.createElement('button');
    copy.type = 'button';
    copy.className = 'copy-snippet';
    copy.textContent = 'Copy';
    copy.setAttribute('aria-label', 'Copy markup to clipboard');

    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = beautifyHTML(preview.innerHTML);
    pre.appendChild(code);

    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        copy.textContent = 'Copied!';
        setTimeout(() => {
          copy.textContent = 'Copy';
        }, 2000);
      } catch (error) {
        copy.textContent = 'Press ⌘C';
        setTimeout(() => {
          copy.textContent = 'Copy';
        }, 2000);
      }
    });

    codePanel.appendChild(copy);
    codePanel.appendChild(pre);

    container.appendChild(codePanel);

    const tablist = document.createElement('div');
    tablist.className = 'preview-tabs';
    tablist.setAttribute('role', 'tablist');
    tablist.setAttribute('aria-label', 'Component view');

    const previewTab = createTab('Preview', previewId, true);
    const codeTab = createTab('Markup', codeId, false);

    const previewTabId = `preview-tab-${index}-preview`;
    const codeTabId = `preview-tab-${index}-code`;
    previewTab.id = previewTabId;
    codeTab.id = codeTabId;
    preview.setAttribute('aria-labelledby', previewTabId);
    codePanel.setAttribute('aria-labelledby', codeTabId);

    tablist.appendChild(previewTab);
    tablist.appendChild(codeTab);

    card.insertBefore(tablist, container);
    card.dataset.enhanced = 'true';
  });
};

const attachTabBehavior = () => {
  const tablists = document.querySelectorAll('.preview-tabs');

  tablists.forEach((tablist) => {
    tablist.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLButtonElement)) return;
      if (!target.dataset.target) return;

      const card = tablist.closest('.showcase-card');
      if (!card) return;

      const panels = card.querySelectorAll('[role="tabpanel"]');
      panels.forEach((panel) => {
        panel.dataset.state = panel.id === target.dataset.target ? 'visible' : 'hidden';
        panel.setAttribute('aria-hidden', panel.id === target.dataset.target ? 'false' : 'true');
      });

      const buttons = tablist.querySelectorAll('.preview-tab');
      buttons.forEach((button) => {
        const isActive = button === target;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-selected', String(isActive));
        button.setAttribute('tabindex', isActive ? '0' : '-1');
      });
    });

    tablist.addEventListener('keydown', (event) => {
      if (!(event.target instanceof HTMLButtonElement)) return;
      const { key } = event;
      if (key !== 'ArrowRight' && key !== 'ArrowLeft') return;

      const buttons = Array.from(tablist.querySelectorAll('.preview-tab'));
      const currentIndex = buttons.indexOf(event.target);
      if (currentIndex === -1) return;

      event.preventDefault();
      const offset = key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (currentIndex + offset + buttons.length) % buttons.length;
      const nextButton = buttons[nextIndex];
      nextButton.focus();
      nextButton.click();
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('#theme-toggle');
  updateThemeToggleLabel(toggle);

  toggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const nextTheme = current === 'dark' ? 'light' : 'dark';
    if (nextTheme === 'light') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'dark');
    }
    window.localStorage.setItem('design-system-theme', nextTheme);
    updateThemeToggleLabel(toggle);
  });

  enhanceShowcaseCards();
  attachTabBehavior();
});
