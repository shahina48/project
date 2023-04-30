import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './routing.module';
import { CheckinService } from './services/checkin.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StartcheckinComponent,
    CheckinComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [CheckinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
