import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermodepasseComponent } from './modifiermodepasse.component';

describe('ModifiermodepasseComponent', () => {
  let component: ModifiermodepasseComponent;
  let fixture: ComponentFixture<ModifiermodepasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermodepasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermodepasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
