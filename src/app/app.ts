import { Component, signal } from '@angular/core';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Body } from './shared/body/body';
import { Urls } from './core/urls/urls';
import { UrlShortener } from './core/urls/url-shortener/url-shortener';

@Component({
  selector: 'app-root',
  imports: [Header, UrlShortener, Footer, Body, Urls],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('url-shortener');
}
