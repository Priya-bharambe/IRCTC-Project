import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayssecComponent } from './holidayssec.component';

describe('HolidayssecComponent', () => {
  let component: HolidayssecComponent;
  let fixture: ComponentFixture<HolidayssecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayssecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayssecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
