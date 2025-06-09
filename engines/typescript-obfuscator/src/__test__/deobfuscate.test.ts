import { describe, it, expect } from 'vitest';
import { deobfuscate } from '../deobfuscate';
import path from 'path';
import { loadDeclassifyConfigFromFile } from '@declassify/shared-config';


describe('deobfuscate()', () => {
    const configPath = path.resolve(__dirname, './fixtures/declassifyrc.yaml');
    const config = loadDeclassifyConfigFromFile(configPath);

    console.log('Loaded config:', config);

    const map = {
        password: '_a',
        token: '_b'
    };

    it('restores obfuscated identifiers to original', () => {
        const input = `const _a = "1234"; console.log(_a); const _b = "abcd";`;
        const { code, restoredMap } = deobfuscate(input, map);

        expect(restoredMap).toEqual({ _a: 'password', _b: 'token' })
        expect(code).toContain('password');
        expect(code).toContain('token');
        expect(code).not.toContain('_a');
        expect(code).not.toContain('_b');
    });
});