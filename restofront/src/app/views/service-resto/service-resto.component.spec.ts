import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRestoComponent } from './service-resto.component';

describe('ServiceRestoComponent', () => {
  let component: ServiceRestoComponent;
  let fixture: ComponentFixture<ServiceRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
