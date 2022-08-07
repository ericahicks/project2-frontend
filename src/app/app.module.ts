import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationVudComponent } from './reservation-vud/reservation-vud.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';
import { NothingToShowComponent } from './nothing-to-show/nothing-to-show.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CheckoutForm2Component } from './checkout-form2/checkout-form2.component';
import { SaveUserComponent } from './save-user/save-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ReservationVudsComponent } from './reservation-vuds/reservation-vuds.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from "primeng/sidebar";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";

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
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    SidebarModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
