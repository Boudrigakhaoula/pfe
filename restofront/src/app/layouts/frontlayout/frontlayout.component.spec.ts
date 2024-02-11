import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontlayoutComponent } from './frontlayout.component';

describe('FrontlayoutComponent', () => {
  let component: FrontlayoutComponent;
  let fixture: ComponentFixture<FrontlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
