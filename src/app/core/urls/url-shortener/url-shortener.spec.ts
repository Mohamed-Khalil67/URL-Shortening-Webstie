import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortener } from './url-shortener';

describe('UrlShortener', () => {
  let component: UrlShortener;
  let fixture: ComponentFixture<UrlShortener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlShortener]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlShortener);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
