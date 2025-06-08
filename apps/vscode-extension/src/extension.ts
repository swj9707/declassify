import * as vscode from 'vscode';
import { declassifyCode } from './declassifier';
import { loadDeclassifyConfig } from '@declassify/shared-config';


/**
 * This method is called when the VSCode extension is activated.
 * It registers the `declassifyCode.start` command that sanitizes selected code
 * by replacing sensitive identifiers based on configured keywords.
 *
 * VSCode 확장이 활성화될 때 호출됩니다.
 * 사용자가 선택한 코드 영역에 대해 키워드 기반의 식별자 난독화를 수행하는 명령을 등록합니다.
 *
 * @param context - The VSCode extension context
 */
export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('declassifyCode.start', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showWarningMessage('No active editor');
            return;
        }

        const document = editor.document;
        const selection = editor.selection;
        const code = selection.isEmpty ? document.getText() : document.getText(selection);

        const workspaceFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
        if (!workspaceFolder) {
            vscode.window.showErrorMessage('No workspace folder found.');
            return;
        }

        const config = loadDeclassifyConfig(workspaceFolder);
        const keywords = config.keywords ?? [];

        const sanitized = declassifyCode(code, keywords);

        vscode.env.clipboard.writeText(sanitized);
        vscode.window.showInformationMessage(`Sanitized code copied to clipboard!  config : ${config}`);
    });

    context.subscriptions.push(disposable);
}

/**
 * This method is called when the extension is deactivated.
 * Currently, it performs no cleanup logic.
 *
 * VSCode 확장이 비활성화될 때 호출됩니다. 현재는 별도 처리 없음.
 */
export function deactivate() { }
