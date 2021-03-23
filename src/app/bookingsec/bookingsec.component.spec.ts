import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsecComponent } from './bookingsec.component';

describe('BookingsecComponent', () => {
  let component: BookingsecComponent;
  let fixture: ComponentFixture<BookingsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
