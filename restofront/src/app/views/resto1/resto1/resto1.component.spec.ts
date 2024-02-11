import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resto1Component } from './resto1.component';

describe('Resto1Component', () => {
  let component: Resto1Component;
  let fixture: ComponentFixture<Resto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Resto1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Resto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
