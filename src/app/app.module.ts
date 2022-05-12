import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { RequestService } from './request/request.service';
import { RequestClass } from './request/request.class';
import { HttpClientModule } from '@angular/common/http';
import { BlockuiComponent } from './components/blockui/blockui.component';
import { State } from './state';


@NgModule({
  declarations: [
    BlockuiComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    BlockuiComponent
  ],
  providers: [
    DatePipe,
    State,
    { provide: RequestService, useClass: RequestClass }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
