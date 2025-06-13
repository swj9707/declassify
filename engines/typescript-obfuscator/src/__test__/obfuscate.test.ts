import { describe, it, expect } from 'vitest';
import { obfuscate } from 'src/obfuscate';
import path from 'path';
import { loadDeclassifyConfigFromFile } from '@declassify/shared-config';

describe('obfuscate()', () => {
    const configPath = path.resolve(__dirname, './fixtures/declassifyrc.yaml');
    const config = loadDeclassifyConfigFromFile(configPath);

    it('obfuscates only configured keywords', () => {
        const input = `
        const password = "1234"; 
        console.log(password);`;
        const result = obfuscate(input, config);
        console.log('result : ', result)
        expect(result.code).not.toContain('password');
    });

    it('obfuscates only configured keywords and words that contain keywords.', () => {
        const input = `
        const password = "1234";
        consle.log(password);
        const passwordExample = "12341234"
        console.log(passwordExample);
        `
        const result = obfuscate(input, config);
        console.log('result : ', result)
        expect(result.code).not.toContain('password')
        expect(result.code).not.toContain('passwordExample')
    });

    it('does not obfuscate unrelated identifiers', () => {
        const input = `const username = "admin"; console.log(username);`;
        const result = obfuscate(input, config);
        console.log('result : ', result)
        expect(result.code).toContain('username');
    });
});
