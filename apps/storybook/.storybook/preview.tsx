import type { Preview } from '@storybook/react';
import '../storybook.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light'
    },
    controls: { expanded: true },
    a11y: {
      element: '#storybook-root'
    }
  }
};

export default preview;
