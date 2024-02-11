import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdminrestoComponent } from './liste-adminresto.component';

describe('ListeAdminrestoComponent', () => {
  let component: ListeAdminrestoComponent;
  let fixture: ComponentFixture<ListeAdminrestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdminrestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdminrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
