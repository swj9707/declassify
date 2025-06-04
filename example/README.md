# 📁 examples

This directory contains sample source files and configuration files used to test and demonstrate Declassify features.

이 디렉토리는 Declassify 기능을 테스트하거나 시연할 때 사용하는 샘플 코드 및 설정 파일을 포함합니다.

---

## 📄 Included Files

### `src/test.ts`
- TypeScript file with dummy variables and class names
- Includes identifiers like `mycorpService`, `exampleClient`, etc.
- Can be used with VSCode extension to test obfuscation

### `.declassifyrc.yaml`
- Example config file to define obfuscation behavior
- Contains keyword list and replacement rules

```yaml
keywords:
  - mycorp
  - example

replacements:
  classPrefix: Obf
  packageRoot: com.example
```

---

## ✅ How to Use

1. Open `test.ts` in VSCode
2. Select some sample code
3. Run Command Palette → `Declassify: Sanitize Code for LLM`
4. Check clipboard result

---

## 🧪 Tip
You can freely modify these files to test different behaviors or configurations.

이 예제 파일은 마음대로 수정해도 되며, 다양한 난독화 결과를 실험하는 데 사용할 수 있습니다.

---

## 📜 License

MIT
