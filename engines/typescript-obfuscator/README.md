# @declassify/typescript-obfuscator

> TypeScript 코드 난독화 및 디난독화를 위한 내부 엔진 모듈  
> Internal engine module for obfuscating and deobfuscating TypeScript code

---

## 🛠 개요 | Overview

This package is a core engine for the [Declassify](https://github.com/swj9707/declassify) project.  
It obfuscates TypeScript code to protect sensitive logic and allows deobfuscation of LLM-generated results.

---

## ✨ 주요 기능 | Features

- 🔐 **obfuscate(code: string)**  
  코드 내 식별자 이름 등을 난독화하여 외부 노출을 방지합니다.  
  Obfuscates identifiers and structure to prevent sensitive code exposure.

- 🔓 **deobfuscate(code: string, map: Mapping)**  
  이전 난독화 맵을 기반으로 코드를 복원합니다.  
  Restores code using previously generated obfuscation mappings.

- ✅ **Type-safe API**  
  모든 public 함수는 타입 선언(`.d.ts`)과 함께 제공되며, 자동완성 및 타입 추론을 지원합니다.  
  All public types come with a declaration (`.d.ts`) that provides autocompletion and type declarations.
---

## 📦 설치 | Installation

현재는 pnpm workspace 기반으로 내부 참조하여 사용하며, npm 패키지로 배포되지는 않습니다.  
This package is used internally via `pnpm workspace` and is **not currently published** as a standalone npm package.

```bash
# 루트 디렉토리에서 설치됨 (pnpm workspace 기준)
pnpm install
```

## 📄 사용 예시 | Usage

```typescript
import { obfuscate, deobfuscate } from '@declassify/typescript-obfuscator';

const originalCode = `
  function greet(name) {
    console.log("Hello " + name);
  }
`;

const { code, map } = obfuscate(originalCode);
console.log(code); // 난독화된 코드

const restored = deobfuscate(code, map);
console.log(restored); // 원본 복원
```

## 🔗 연관 패키지 | Related Packages
- [`@declassify/shared-config`](../../libs/shared-config)
  난독화 전략 및 공통 설정을 관리합니다.  
  Shared config and mapping strategy used across engines.

## 🚫 배포 정책 | Publish Policy

현재 이 패키지는 외부 npm registry에 배포되지 않습니다.  
This package is not published to any npm registry now.


## 📝 라이선스 | License
MIT
