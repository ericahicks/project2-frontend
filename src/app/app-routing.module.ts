import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CheckoutForm2Component } from './checkout-form2/checkout-form2.component';

const routes: Routes = [
  {
    path: 'checkout', component: CheckoutFormComponent
  },{
    path: 'checkout2', component: CheckoutForm2Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
