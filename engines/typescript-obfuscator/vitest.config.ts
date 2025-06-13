/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    server: {
        watch: {
            ignored: ['**/dist/**', '**/node_modules/**'],
        },

    },
    test: {
        globals: true,
        environment: 'node',
        setupFiles: [path.resolve(__dirname, 'src/__test__/setup.ts')],
        silent: false,
        exclude: [
            'src/__test__/fixtures/setup.ts',
            'src/__test__/setup.ts',
            'dist/**', 'node_modules/**'
        ],
        include: [
            'src/__test__/**/*.ts'
        ],

    },
    resolve: {
        alias: {
            '@declassify/shared-config': path.resolve(__dirname, '../../libs/shared-config/dist'),
        },
        extensions: ['.ts', '.mts', '.cts', '.js', '.mjs', '.cjs', '.json'],
    },
});
