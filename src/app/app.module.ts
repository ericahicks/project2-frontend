import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationVudComponent } from './reservation-vud/reservation-vud.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationVudComponent,
    ReservationsListComponent,
    ReservationCardComponent,
    ReservationUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
