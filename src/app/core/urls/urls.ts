import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Url } from './url/url';
import { UrlShortener } from './url-shortener/url-shortener';

type UrlItem = { id: number; original: string; shortened: string };

@Component({
  selector: 'app-urls',
  imports: [CommonModule, Url, UrlShortener],
  templateUrl: './urls.html',
  styleUrl: './urls.css',
})
export class Urls {
  private nextId = 1;

  urls = signal<UrlItem[]>([]);

  // called when child UrlShortenerComponent emits
  handleUrlCreated(event: { original: string; shortened: string }) {
    const item: UrlItem = {
      id: this.nextId++,
      original: event.original,
      shortened: event.shortened,
    };

    this.urls.update((list) => [item, ...list]);
  }
}
