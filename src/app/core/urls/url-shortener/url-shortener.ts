import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-url-shortener',
  imports: [FormsModule],
  templateUrl: './url-shortener.html',
  styleUrl: './url-shortener.css',
})
export class UrlShortener {
  urlCreated = output<{ original: string; shortened: string }>();

  constructor(private http: HttpClient) {}

  shorten(value: string) {
    if (!value) return;

    const original = value.trim();
    const apiUrl = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(original);

    this.http
      .get(apiUrl, { responseType: 'text' as const }) // IMPORTANT
      .subscribe({
        next: (shortened) => {
          console.log('Shortened URL:', shortened);

          this.urlCreated.emit({
            original,
            shortened,
          });
        },
        error: (err) => {
          console.error('Error shortening URL:', err);
        },
      });
  }
}
