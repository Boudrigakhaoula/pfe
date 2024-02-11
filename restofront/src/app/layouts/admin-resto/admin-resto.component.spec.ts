import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestoComponent } from './admin-resto.component';

describe('AdminRestoComponent', () => {
  let component: AdminRestoComponent;
  let fixture: ComponentFixture<AdminRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
