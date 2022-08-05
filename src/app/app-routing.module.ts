import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NothingToShowComponent } from './nothing-to-show/nothing-to-show.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';

import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CheckoutForm2Component } from './checkout-form2/checkout-form2.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ReservationVudsComponent } from './reservation-vuds/reservation-vuds.component';
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
  },{
    path: 'vuds', component: ReservationVudsComponent
  },{ 
    path: 'update-reservation', component: ReservationUpdateComponent
  },{ 
    path: 'existing-reservations',  component: ReservationsListComponent
  },{ 
    path: '**', component: NothingToShowComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
