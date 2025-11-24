import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-url',
  imports: [],
  templateUrl: './url.html',
  styleUrl: './url.css',
})
export class Url {
  // signal inputs (modern @Input)
  original = input<string>();
  shortened = input<string>();

  copied = signal(false);

  copy() {
    const value = this.shortened();
    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }
}
