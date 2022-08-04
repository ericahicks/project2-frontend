import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CheckoutForm2Component } from './checkout-form2/checkout-form2.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SaveUserComponent } from './save-user/save-user.component';

const routes: Routes = [
  {
    path: 'checkout', component: CheckoutFormComponent
  },{
    path: 'checkout2', component: CheckoutForm2Component
  },{
    path: 'adduser', component: SaveUserComponent
  },{
    path: 'viewusers', component: ListUserComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
