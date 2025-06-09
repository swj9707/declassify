import { Project, SyntaxKind } from 'ts-morph';

export interface DeobfuscationResult {
    code: string;
    restoredMap: Record<string, string>; // e.g., _a -> password
}



/**
 * 🔓 Deobfuscate the given code using an obfuscation map.
 *
 * @param obfuscatedCode Source code with obfuscated identifiers.
 * @param map A record mapping obfuscated names to original identifiers.
 * @returns {DeobfuscationResult} - Deobfuscated code and reverse map.
 */
export function deobfuscate(
    obfuscatedCode: string,
    map: Record<string, string>
): DeobfuscationResult {

    const project = new Project({ useInMemoryFileSystem: true });
    const sourceFile = project.createSourceFile('temp.ts', obfuscatedCode);

    const reverseMap = Object.entries(map).reduce(
        (acc, [original, obfuscated]) => {
            acc[obfuscated] = original;
            return acc;
        },
        {} as Record<string, string>
    );

    const identifiers = sourceFile.getDescendantsOfKind(SyntaxKind.Identifier);

    for (const id of identifiers) {
        const name = id.getText();

        if (reverseMap[name]) {
            id.replaceWithText(reverseMap[name]);
        }
    }

    return {
        code: sourceFile.getFullText(),
        restoredMap: reverseMap,
    };
}