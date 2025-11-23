import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Urls } from './urls';

describe('Urls', () => {
  let component: Urls;
  let fixture: ComponentFixture<Urls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Urls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Urls);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
