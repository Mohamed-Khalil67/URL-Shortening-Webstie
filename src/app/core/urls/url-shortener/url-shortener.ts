import { Component, output, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-url-shortener',
  imports: [ReactiveFormsModule],
  templateUrl: './url-shortener.html',
  styleUrl: './url-shortener.css',
})
export class UrlShortener {
  urlCreated = output<{ original: string; shortened: string }>();

  isLoading = signal(false);
  showError = signal(false);

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      url: ['', [Validators.required]],
    });
  }

  shorten() {
    this.showError.set(false);

    if (this.form.invalid) {
      this.showError.set(true);
      return;
    }

    this.isLoading.set(true);
    const original = this.form.value.url!;

    // fake short URL for now – replace with API later
    const shortened = 'https://rel.ink/' + Math.random().toString(36).substring(2, 7);

    this.urlCreated.emit({ original, shortened });

    this.form.reset();
    this.isLoading.set(false);
  }
}
