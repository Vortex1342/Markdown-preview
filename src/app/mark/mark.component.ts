import { Component } from '@angular/core';
import * as marked from 'marked';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mark',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './mark.component.html',
  styleUrl: './mark.component.css'
})
export class MarkComponent {
  markdownText: string = '';

  getPreviewHtml() {
    return marked.parse(this.markdownText);
  }

  checkBold() {
    const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
    const textSelected = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);

    if (textSelected.length > 0) {
      this.applyBold();
    } else {
      this.bold();
    }
  }

  bold() {
    this.markdownText = this.markdownText + ' **(TEXT)** '
  }

  applyBold() {
    const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== undefined && end !== undefined) {
      const selectedText = textarea.value.substring(start, end);
      const beforeText = textarea.value.substring(0, start);
      const afterText = textarea.value.substring(end);
      this.markdownText = `${beforeText}**${selectedText}**${afterText}`;
      textarea.value = this.markdownText;
      textarea.selectionStart = textarea.selectionEnd = start + 2 + selectedText.length;
    }
  }


  applyHeading1() {
    const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== undefined && end !== undefined) {
      const selectedText = textarea.value.substring(start, end);
      const beforeText = textarea.value.substring(0, start);
      this.markdownText = `${beforeText}# ${selectedText}`;
      textarea.value = this.markdownText;
      textarea.selectionStart = textarea.selectionEnd = start + 2 + selectedText.length;
    }
  }



  checkItalic() {
    const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
    const textSelected = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);

    if (textSelected.length > 0) {
      this.applyItalic();
    } else {
      this.italic();
    }
  }

  italic() {
    this.markdownText = this.markdownText + ' _(TEXT)_ '
  }

  applyItalic() {
    const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== undefined && end !== undefined) {
      const selectedText = textarea.value.substring(start, end);
      const beforeText = textarea.value.substring(0, start);
      const afterText = textarea.value.substring(end);
      this.markdownText = `${beforeText} _${selectedText}_ ${afterText}`;
      textarea.value = this.markdownText;
      textarea.selectionStart = textarea.selectionEnd = start + 2 + selectedText.length;
    }
  }

  checkLink() {
    const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
    const textSelected = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);

    if (textSelected.length > 0) {
      this.applyLink();
    } else {
      this.link();
    }
  }

  link() {
    this.markdownText = this.markdownText + '[TEXT](URL)'
  }
  applyLink() {
    const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== undefined && end !== undefined) {
      const selectedText = textarea.value.substring(start, end);
      const beforeText = textarea.value.substring(0, start);
      const afterText = textarea.value.substring(end);
      // Apply Markdown bold syntax
      this.markdownText = `${beforeText}[${selectedText}](${afterText}url)`;
      // Update cursor position
      textarea.value = this.markdownText; // Reflect the updated text in the textarea
      textarea.selectionStart = textarea.selectionEnd = start + 2 + selectedText.length; // Position the cursor after the bold syntax
    }
  }

  checkCode() {
    const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
    const textSelected = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);

    if (textSelected.length > 0) {
      this.applyCode();
    } else {
      this.codeBlocks();
    }
  }

  applyCode() {
    const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== undefined && end !== undefined) {
      const selectedText = textarea.value.substring(start, end);
      const beforeText = textarea.value.substring(0, start);
      const afterText = textarea.value.substring(end);
      this.markdownText = `${beforeText}\`${selectedText}\`${afterText}`;
      textarea.value = this.markdownText;
      textarea.selectionStart = textarea.selectionEnd = start + 2 + selectedText.length;
    }
  }

  codeBlocks() {
    this.markdownText = this.markdownText + ' ` (CODE) ` '
  }


}
