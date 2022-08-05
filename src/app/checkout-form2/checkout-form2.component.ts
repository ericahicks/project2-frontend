import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout-form2',
  templateUrl: './checkout-form2.component.html',
  styleUrls: ['./checkout-form2.component.css']
})
export class CheckoutForm2Component implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    email: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    // Process checkout data here
    //this.items = this.reservationsService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
