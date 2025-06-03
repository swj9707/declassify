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
