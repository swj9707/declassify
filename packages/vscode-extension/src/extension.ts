// src/extension.ts
import * as vscode from 'vscode';
import { declassifyCode } from './declassifier';

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

        const keywords = vscode.workspace.getConfiguration('declassifyCode').get<string[]>('keywords') || ['mycorp', 'danal'];
        const sanitized = declassifyCode(code, keywords);

        vscode.env.clipboard.writeText(sanitized);
        vscode.window.showInformationMessage('Sanitized code copied to clipboard!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
