import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrirateComponent } from './prirate.component';

describe('PrirateComponent', () => {
  let component: PrirateComponent;
  let fixture: ComponentFixture<PrirateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrirateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrirateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
