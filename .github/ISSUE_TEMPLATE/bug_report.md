---
name: Bug report
about: Create a report to help us improve
title: "[Bug] <문제 요약 | Bug Summary>"
labels: bug
assignees: ''

---

# 🐞 문제 설명 (Problem Description)
어떤 문제가 발생했는지 명확히 설명해주세요.  
Please clearly describe the issue you encountered.

예: 명령어 실행 시 오류가 발생하고, 코드가 클립보드에 복사되지 않습니다.  
e.g., Running the command throws an error and the code isn't copied to the clipboard.

# 🔁 재현 방법 (Steps to Reproduce)
문제를 재현할 수 있는 구체적인 단계가 있다면 알려주세요.  
If possible, list steps to reproduce the issue:

1. test.ts 파일 열기 (Open test.ts)
2. 코드 블록 선택 (Select a code block)
3. 명령어 실행 (Declassify: Sanitize Code)

# ⚙️ 환경 정보 (Environment Info)
- 확장 버전 (Extension version): v0.1.0
- OS: macOS Sonoma 14.4.1
- VSCode 버전 (VSCode version): 1.80.0

# 🧾 사용한 .declassifyrc.yaml (Optional Config File)
```yaml
keywords:
  - mycorp
  - example
replacements:
  classPrefix: Obf
  packageRoot: com.example
