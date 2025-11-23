import { Component, input } from '@angular/core';

@Component({
  selector: 'app-url-shortener',
  imports: [],
  templateUrl: './url-shortener.html',
  styleUrl: './url-shortener.css',
})
export class UrlShortener {
  urlLink = input('');
}
