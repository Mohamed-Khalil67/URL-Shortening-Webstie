import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Url } from './url';

describe('Url', () => {
  let component: Url;
  let fixture: ComponentFixture<Url>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Url]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Url);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
