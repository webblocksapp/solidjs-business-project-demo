import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths(), EnvironmentPlugin('all')],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
