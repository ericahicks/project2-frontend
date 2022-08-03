import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationVudComponent } from './reservation-vud/reservation-vud.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationVudComponent,
    ReservationsListComponent
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
