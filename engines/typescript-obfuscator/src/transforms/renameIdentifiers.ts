import { DeclassifyConfig } from '@declassify/shared-config';
import { SourceFile, SyntaxKind } from 'ts-morph';

function generateName(counter: number, prefix = '_'): string {
    return `${prefix}${counter.toString(36)}`;
}

/**
 * 🔁 Renames identifiers in a TypeScript source file based on provided configuration.
 *
 * @param file - 📄 The `SourceFile` instance from `ts-morph` to apply identifier renaming to.
 * @param config - ⚙️ The `DeclassifyConfig` containing the `keywords` to obfuscate and optional replacement settings.
 *
 * @returns 🗺️ A map of original identifier names to their obfuscated equivalents.
 *
 * @example
 * ```ts
 * const result = renameIdentifiers(sourceFile, {
 *   keywords: ['password', 'secret'],
 *   replacements: { classPrefix: 'Obf' }
 * });
 * // result: { password: 'Obf0', secret: 'Obf1' }
 * ```
 */
export function renameIdentifiers(file: SourceFile, config: DeclassifyConfig): Record<string, string> {
    const identifiers = file.getDescendantsOfKind(SyntaxKind.Identifier);
    const nameMap = new Map<string, string>();
    let counter = 0;

    for (const id of identifiers) {
        const text = id.getText();
        if (!config.keywords.includes(text)) continue;

        if (!nameMap.has(text)) {
            const replacement = generateName(counter++, config.replacements?.classPrefix ?? '_');
            nameMap.set(text, replacement);
        }

        id.replaceWithText(nameMap.get(text)!);
    }

    return Object.fromEntries(nameMap);
}
