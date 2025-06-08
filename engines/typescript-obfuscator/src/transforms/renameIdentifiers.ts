import { DeclassifyConfig } from '@declassify/shared-config';
import { SourceFile, SyntaxKind } from 'ts-morph';

let counter = 0;
const nameMap = new Map<string, string>();

function generateName(prefix: string): string {
    return `${prefix}${++counter}`;
}

export function renameIdentifiers(file: SourceFile, config: DeclassifyConfig) {
    const keywords = config.keywords.map(k => k.trim());
    const prefix = config.replacements?.classPrefix ?? 'Obf';

    const identifiers = file.getDescendantsOfKind(SyntaxKind.Identifier);

    for (const id of identifiers) {
        const text = id.getText();

        if (!keywords.includes(text)) continue;

        if (!nameMap.has(text)) {
            nameMap.set(text, generateName(prefix));
        }

        id.replaceWithText(nameMap.get(text)!);
    }
}
