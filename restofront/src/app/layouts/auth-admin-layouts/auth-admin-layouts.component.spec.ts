import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAdminLayoutsComponent } from './auth-admin-layouts.component';

describe('AuthAdminLayoutsComponent', () => {
  let component: AuthAdminLayoutsComponent;
  let fixture: ComponentFixture<AuthAdminLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthAdminLayoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthAdminLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
