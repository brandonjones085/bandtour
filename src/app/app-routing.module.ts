import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './start/start.component'; 
import { AddPlayerTwoComponent } from './add-player-two/add-player-two.component'
import {WelcomeComponent} from './welcome/welcome.component'
import {SelectTypeComponent} from './select-type/select-type.component'
import {SuppliesComponent} from './supplies/supplies.component'
import { ViewSuppliesComponent } from './view-supplies/view-supplies.component';
import {ChoiceComponent} from './choice/choice.component'; 
import { FirstStopComponent } from './first-stop/first-stop.component';

const routes: Routes = [
  {path: "", component: WelcomeComponent},
  {path: 'start', component: StartComponent }, 
  {path: 'addplayertwo', component: AddPlayerTwoComponent}, 
  {path: 'selectType', component: SelectTypeComponent}, 
  {path: 'supplies', component: SuppliesComponent}, 
  {path: "choice", component: ChoiceComponent}, 
  {path: "viewSupplies", component: ViewSuppliesComponent}, 
  {path: "first", component: FirstStopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
