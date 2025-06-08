import { describe, it, expect } from 'vitest';
import { obfuscate } from '../obfuscate';
import path from 'path';
import { loadDeclassifyConfigFromFile } from '@declassify/shared-config';

describe('obfuscate()', () => {
    const configPath = path.resolve(__dirname, './fixtures/declassifyrc.yaml');
    const config = loadDeclassifyConfigFromFile(configPath);

    console.log('Loaded config:', config);

    it('obfuscates only configured keywords', () => {
        const input = `const password = "1234"; console.log(password);`;
        const result = obfuscate(input, config);
        console.log('result : ', result)
        expect(result).not.toContain('password');
    });

    it('does not obfuscate unrelated identifiers', () => {
        const input = `const username = "admin"; console.log(username);`;
        const result = obfuscate(input, config);
        expect(result).toContain('username');
    });
});
