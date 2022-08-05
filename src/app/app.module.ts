import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationVudComponent } from './reservation-vud/reservation-vud.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutForm2Component } from './checkout-form2/checkout-form2.component';
import { SaveUserComponent } from './save-user/save-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ReservationVudsComponent } from './reservation-vuds/reservation-vuds.component';






@NgModule({
  declarations: [
    AppComponent,
    ReservationVudComponent,
    CheckoutFormComponent,
    CheckoutForm2Component,
    SaveUserComponent,
    ListUserComponent,
    ReservationVudsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule, FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
