import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerprofilComponent } from './editerprofil.component';

describe('EditerprofilComponent', () => {
  let component: EditerprofilComponent;
  let fixture: ComponentFixture<EditerprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerprofilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
