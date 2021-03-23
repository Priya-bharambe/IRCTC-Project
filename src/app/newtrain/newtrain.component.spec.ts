import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtrainComponent } from './newtrain.component';

describe('NewtrainComponent', () => {
  let component: NewtrainComponent;
  let fixture: ComponentFixture<NewtrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
