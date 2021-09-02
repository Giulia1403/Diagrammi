import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PieComponent} from './pie/pie.component';
import {AppRoutingModule} from './app-routing.module';
import {BarComponent} from './bar/bar.component';
import {ChartsModule} from "ng2-charts";
import {RadarComponent} from "./radar/radar.component";
import {LineComponent} from './line/line.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    RadarComponent,
    BarComponent,
    LineComponent,
    HomeComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ChartsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
