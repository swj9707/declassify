import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface DeclassifyConfig {
    keywords: string[];
    replacements?: {
        classPrefix?: string;
        packageRoot?: string;
    };
}

/**
 * 📄 Loads the .declassifyrc.yaml configuration file from the given workspace path.
 * If the file does not exist, returns a default config with an empty keyword list.
 * 
 * @param workspacePath  Absolute path to the VSCode workspace folder
 * @returns DeclassifyConfig object ({ keywords: string[] })
 */
export function loadDeclassifyConfig(workspacePath: string): DeclassifyConfig {
    const configPath = path.join(workspacePath, '.declassifyrc.yaml');

    if (fs.existsSync(configPath)) {
        const content = fs.readFileSync(configPath, 'utf-8');
        return yaml.load(content) as DeclassifyConfig;
    }

    return {
        keywords: []
    };
}
