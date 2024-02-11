import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPirateComponent } from './detail-pirate.component';

describe('DetailPirateComponent', () => {
  let component: DetailPirateComponent;
  let fixture: ComponentFixture<DetailPirateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPirateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPirateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
