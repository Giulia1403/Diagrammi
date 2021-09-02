import {RadarComponent} from "./radar/radar.component";
import {RouterModule, Routes} from "@angular/router";
import {LineComponent} from "./line/line.component";
import {HomeComponent} from "./home/home.component";
import {PieComponent} from "./pie/pie.component";
import {BarComponent} from "./bar/bar.component";
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'pie', component: PieComponent},
  {path: 'bar', component: BarComponent},
  {path: 'radar', component: RadarComponent},
  {path: 'line', component: LineComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
