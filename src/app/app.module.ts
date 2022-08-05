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
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutForm2Component } from './checkout-form2/checkout-form2.component';
import { SaveUserComponent } from './save-user/save-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ReservationVudsComponent } from './reservation-vuds/reservation-vuds.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationVudComponent,
    ReservationsListComponent,
    ReservationCardComponent,
    ReservationUpdateComponent,
    NothingToShowComponent,
    CheckoutFormComponent,
    CheckoutForm2Component,
    SaveUserComponent,
    ListUserComponent,
    ReservationVudsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
