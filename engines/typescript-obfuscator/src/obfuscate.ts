import { Project } from 'ts-morph';
import { renameIdentifiers } from './transforms/renameIdentifiers';
import type { DeclassifyConfig } from '@declassify/shared-config';

export function obfuscate(sourceCode: string, config: DeclassifyConfig): string {
    const project = new Project({ useInMemoryFileSystem: true });
    const sourceFile = project.createSourceFile('temp.ts', sourceCode);
    renameIdentifiers(sourceFile, config);
    return sourceFile.getFullText();
}
