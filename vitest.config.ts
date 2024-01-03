/// <reference types="vitest" />
import { resolve } from 'path';
import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...defaultExclude, '/database', '/prisma'],
  },
  resolve: {
    alias: [
      {
        replacement: '@/domain',
        find: resolve(__dirname, 'src/domain'),
      },
    ],
  },
});
