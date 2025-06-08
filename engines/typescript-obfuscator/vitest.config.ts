/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        setupFiles: [path.resolve(__dirname, 'src/__test__/setup.ts')],
        silent: false,
        reporters: 'default',
        outputFile: undefined,
    },
    resolve: {
        alias: {
            '@declassify/shared-config': path.resolve(__dirname, '../../libs/shared-config/dist'),
        }
    },
});
