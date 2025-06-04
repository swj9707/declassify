export function declassifyCode(code: string, keywords: string[]): string {
    const regexList = keywords.map(k => new RegExp(`\\b\\w*${k}\\w*\\b`, 'gi'));
    let counter = 0;
    const map = new Map<string, string>();


    for (const regex of regexList) {
        code = code.replace(regex, (match) => {
            if (!map.has(match)) {
                map.set(match, `Obf${String.fromCharCode(65 + counter++)}`);
            }
            return map.get(match)!;
        });
    }
    return code;
}