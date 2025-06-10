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

/**
 * 📄 Loads a Declassify configuration from an explicit YAML file path.
 * 
 * This function is typically used in testing or CLI scenarios where the path to 
 * the configuration file is known in advance. If the file does not exist, it returns 
 * a default configuration with an empty keyword list.
 * 
 * @param configFilePath Absolute or relative path to the YAML configuration file.
 * @returns DeclassifyConfig object ({ keywords: string[] })
 * 
 * @example
 * const config = loadDeclassifyConfigFromFile('./test/fixtures/config.yaml');
 * console.log(config.keywords); // ['password', 'token']
 */
export function loadDeclassifyConfigFromFile(configFilePath: string): DeclassifyConfig {
    if (fs.existsSync(configFilePath)) {
        const content = fs.readFileSync(configFilePath, 'utf-8');
        return yaml.load(content) as DeclassifyConfig;
    }

    return { keywords: [] };
}
