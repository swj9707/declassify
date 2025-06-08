# 🔧 shared-config

A shared configuration utility for the Declassify project.  
Declassify 프로젝트의 설정 파일을 불러오고 파싱하는 공용 유틸리티입니다.

---

## 📦 Features | 주요 기능

- Loads `.declassifyrc.yaml` from the workspace root
- Parses YAML and returns a structured config object
- Fallback to default configuration if file is missing

워크스페이스 루트에서 `.declassifyrc.yaml` 파일을 찾아 파싱합니다.  
파일이 없으면 기본값으로 대체합니다.

---

## 🔍 `loadDeclassifyConfig(workspacePath: string): DeclassifyConfig`

### 📘 Description

Loads user-defined keyword configuration from `.declassifyrc.yaml`.  
If the file does not exist, returns `{ keywords: [] }`.

사용자가 설정한 민감 키워드 목록을 `.declassifyrc.yaml` 파일에서 읽어옵니다.  
설정 파일이 존재하지 않을 경우, 키워드가 비어있는 기본값을 반환합니다.

### 🧾 Parameters

- `workspacePath` – Absolute path to the root of the VSCode workspace  
  VSCode 워크스페이스 루트 디렉토리의 절대 경로

### 🔁 Returns

- `DeclassifyConfig` – Parsed configuration object

---

## 🧪 Example | 사용 예시

```ts
import { loadDeclassifyConfig } from 'shared-config';

const config = loadDeclassifyConfig('/home/user/dev/project');
console.log(config.keywords); // ['mycorp', 'danal']
```

---

## 🗂️ Configuration File Format (.declassifyrc.yaml)

```yaml
keywords:
  - mycorp
  - danal

replacements:
  classPrefix: Obf
  packageRoot: com.example
```

- `keywords`: list of sensitive words to obfuscate
- `replacements.classPrefix`: prefix used in obfuscated variable/class names
- `replacements.packageRoot`: package name used for sanitized Java/Kotlin code

---

## ✅ Default Fallback

If the config file does not exist:

```ts
{
  keywords: [],
  replacements: {
    classPrefix: "Obf",
    packageRoot: "com.example"
  }
}
```

---

## 📁 Location

This file must be placed in the **workspace root**:

```
your-project/
├── .declassifyrc.yaml  ✅
├── src/
└── ...
```

---

## 📜 License

MIT
