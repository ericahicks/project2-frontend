import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationVudComponent } from './reservation-vud/reservation-vud.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutForm2Component } from './checkout-form2/checkout-form2.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationVudComponent,
    CheckoutFormComponent,
    CheckoutForm2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
