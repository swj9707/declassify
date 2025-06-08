import type { DeclassifyConfig } from '@declassify/shared-config';

export function declassifyCode(code: string, config: DeclassifyConfig): string {
    const { keywords, replacements } = config;
    const regexList = keywords.map(k => new RegExp(`\\b\\w*${k}\\w*\\b`, 'gi'));
    const prefix = replacements?.classPrefix ?? '_';
    let counter = 0;
    const map = new Map<string, string>();

    for (const regex of regexList) {
        code = code.replace(regex, (match) => {
            if (!map.has(match)) {
                const obfuscated = `${prefix}${String.fromCharCode(65 + counter++)}`;
                map.set(match, obfuscated);
            }
            return map.get(match)!;
        });
    }

    return code;
}
