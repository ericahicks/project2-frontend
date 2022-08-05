import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationVudComponent } from './reservation-vud/reservation-vud.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';
import { NothingToShowComponent } from './nothing-to-show/nothing-to-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationVudComponent,
    ReservationsListComponent,
    ReservationCardComponent,
    ReservationUpdateComponent,
    NothingToShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
