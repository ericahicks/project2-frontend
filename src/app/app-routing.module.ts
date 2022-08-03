import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';

const routes: Routes = [
  { path: 'update-reservation', component: ReservationUpdateComponent},
  { path: 'existing-reservations',  component: ReservationsListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
