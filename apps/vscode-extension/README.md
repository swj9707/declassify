# Declassify - VSCode Extension

🚧 **Protect your company’s sensitive code when asking LLMs.**  
🔒 **LLM에 질문하기 전에 회사 내부 식별자를 자동으로 마스킹하세요.**

---

## ✨ Features / 주요 기능

- ✅ Keyword-based identifier sanitization (변수명, 클래스명, 패키지명 자동 치환)
- ✅ Restore original names (원래 이름 복원 기능 지원)
- ✅ Configuration via settings or `.declassifyrc.yaml` (VSCode 설정 또는 YAML 구성 지원)
- ✅ Clipboard integration (치환된 결과를 클립보드에 복사)

---

## 🛠 How to Use / 사용 방법

1. Open any source file (Java, Kotlin, TypeScript)  
   (Java, Kotlin, TypeScript 파일을 열어주세요)

2. Select code or leave selection empty to sanitize entire file  
   (일부 선택하거나, 전체 파일을 자동 처리 가능)

3. Run the command:  
   **Command Palette → `Declassify: Sanitize Code for LLM`**  
   (커맨드 팔레트에서 위 명령어 실행)

4. Result is copied to clipboard  
   (결과는 클립보드에 자동 복사됩니다)

---

## ⚙️ Configuration / 설정 방법

### 🗂️ Configuration File Format (.declassifyrc.yaml)
```yaml
keywords:
  - mycorp
  - example

replacements:
  classPrefix: Obf
  packageRoot: com.example

```
