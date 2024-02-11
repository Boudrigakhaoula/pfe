import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAdminRestoComponent } from './auth-admin-resto.component';

describe('AuthAdminRestoComponent', () => {
  let component: AuthAdminRestoComponent;
  let fixture: ComponentFixture<AuthAdminRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthAdminRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthAdminRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
