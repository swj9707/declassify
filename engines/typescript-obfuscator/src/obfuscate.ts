import { Project } from 'ts-morph';
import { renameIdentifiers } from './transforms/renameIdentifiers';
import type { DeclassifyConfig } from '@declassify/shared-config';

export interface ObfuscationResult {
    code: string;
    map: Record<string, string>;
}

/**
 * 🔒 Obfuscates the given source code by renaming identifiers based on the provided config.
 *
 * Uses `ts-morph` to parse and manipulate the AST in-memory without touching the file system.
 * 
 * @param sourceCode - 📝 The original TypeScript source code to be obfuscated.
 * @param config - ⚙️ Configuration object containing keywords and optional prefix/root settings.
 * @returns An object containing the obfuscated code and the identifier map.
 */
export function obfuscate(sourceCode: string, config: DeclassifyConfig): ObfuscationResult {
    const project = new Project({ useInMemoryFileSystem: true });
    const sourceFile = project.createSourceFile('temp.ts', sourceCode);
    const map = renameIdentifiers(sourceFile, config);
    const code = sourceFile.getFullText();
    return { code, map }
}
