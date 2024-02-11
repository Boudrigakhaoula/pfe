import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemenuComponent } from './editemenu.component';

describe('EditemenuComponent', () => {
  let component: EditemenuComponent;
  let fixture: ComponentFixture<EditemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
