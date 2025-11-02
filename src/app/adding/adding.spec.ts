import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adding } from './adding';

describe('Adding', () => {
  let component: Adding;
  let fixture: ComponentFixture<Adding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
