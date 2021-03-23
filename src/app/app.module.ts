import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingsecComponent } from './bookingsec/bookingsec.component';
import { FooterComponent } from './footer/footer.component';
import { Footer1Component } from './footer1/footer1.component';
import { HolidayssecComponent } from './holidayssec/holidayssec.component';
import { NewtrainComponent } from './newtrain/newtrain.component';
import { ServicesComponent } from './services/services.component';
import { ETicketComponent } from './e-ticket/e-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookingsecComponent,
    FooterComponent,
    Footer1Component,
    HolidayssecComponent,
    NewtrainComponent,
    ServicesComponent,
    ETicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
