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
import { ReservationVudComponent } from './reservation-vud/reservation-vud.component';
import { RoomCardComponent } from './room-card/room-card.component';


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
    path: 'vuds', component: ReservationVudsComponent // Amir's save reservation to db 
  },{ 
    path: 'update', component: ReservationUpdateComponent
  },{ 
    path: 'view',component: ReservationsListComponent
  },{
    path: 'reservations', component: ReservationVudComponent // Erica's view existing reservations
  },{
    path: 'checkout', component: CheckoutFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
