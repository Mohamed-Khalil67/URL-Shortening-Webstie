import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-url',
  imports: [],
  templateUrl: './url.html',
  styleUrl: './url.css',
})
export class Url {
  original = input<string>();
  shortened = input<string>();

  copied = signal(false);

  copy() {
    navigator.clipboard.writeText(this.shortened()!);
    this.copied.set(true);

    setTimeout(() => this.copied.set(false), 1500);
  }
}
