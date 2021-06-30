import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './services/data/data.service';
import { TableComponent } from './components/table/table.component';
import { AlertComponent } from './components/alerts/alert/alert.component';
import { AlertErrorComponent } from './components/alerts/alert-error/alert-error.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AlertComponent,
    AlertErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
