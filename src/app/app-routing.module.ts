import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NothingToShowComponent } from './nothing-to-show/nothing-to-show.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';

const routes: Routes = [
  { path: 'update-reservation', component: ReservationUpdateComponent},
  { path: 'existing-reservations',  component: ReservationsListComponent},
  { path: '**', component: NothingToShowComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
