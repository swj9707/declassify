import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const configPath = path.resolve(__dirname, 'fixtures/declassifyrc.yaml');

fs.mkdirSync(path.dirname(configPath), { recursive: true });

const config = {
    keywords: ['password', 'token'],
    replacements: { classPrefix: "Obf" }
};
fs.writeFileSync(configPath, yaml.dump(config), 'utf-8');

console.log(`[setup] declassifyrc.yaml generated at: ${configPath}`);
