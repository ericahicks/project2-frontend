import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutForm2Component } from './checkout-form2.component';

describe('CheckoutForm2Component', () => {
  let component: CheckoutForm2Component;
  let fixture: ComponentFixture<CheckoutForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutForm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
