import type { StorybookConfig } from 'storybook-solidjs-vite';
import suidPlugin from '@suid/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: 'storybook-solidjs-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: (config) => {
    config.plugins?.push(suidPlugin(), tsconfigPaths());
    return config;
  },
};
export default config;
