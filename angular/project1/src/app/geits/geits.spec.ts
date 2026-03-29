import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeitsComponent } from './geits';

describe('Geits', () => {
  let component: GeitsComponent;
  let fixture: ComponentFixture<GeitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeitsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
