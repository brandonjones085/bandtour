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
import { AtlantaComponent } from './atlanta/atlanta.component';
import { BaltiComponent } from './balti/balti.component';
import { BirmingComponent } from './birming/birming.component';
import { DetroitComponent } from './detroit/detroit.component';
import { ElPasoComponent } from './el-paso/el-paso.component';
import { FinalComponent } from './final/final.component';
import { HoustonComponent } from './houston/houston.component';
import { NashvilleComponent } from './nashville/nashville.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { OrleansComponent } from './orleans/orleans.component';
import { PhillyComponent } from './philly/philly.component';
import { PhoenixComponent } from './phoenix/phoenix.component';
import { GameoverComponent } from './gameover/gameover.component';
import { AddPlayerThreeComponent } from './add-player-three/add-player-three.component';
import {AddPlayerFourComponent} from './add-player-four/add-player-four.component'

const routes: Routes = [
  {path: "", component: WelcomeComponent},
  {path: 'start', component: StartComponent }, 
  {path: 'addplayertwo', component: AddPlayerTwoComponent}, 
  {path: 'selectType', component: SelectTypeComponent}, 
  {path: 'supplies', component: SuppliesComponent}, 
  {path: "choice", component: ChoiceComponent}, 
  {path: "viewSupplies", component: ViewSuppliesComponent}, 
  {path: "first", component: FirstStopComponent }, 
  {path: "atlanta", component: AtlantaComponent}, 
  {path: "balti", component: BaltiComponent}, 
  {path: "birming", component: BirmingComponent}, 
  {path: "detroit", component: DetroitComponent}, 
  {path: "el-paso", component: ElPasoComponent}, 
  {path: "final", component: FinalComponent}, 
  {path: "houston", component: HoustonComponent}, 
  {path: "nashville", component: NashvilleComponent}, 
  {path: "newyork", component: NewyorkComponent}, 
  {path: "orleans", component: OrleansComponent}, 
  {path: "philly", component: PhillyComponent}, 
  {path: "phoenix", component: PhoenixComponent}, 
  {path: "viewSupplies", component: ViewSuppliesComponent}, 
  {path: "gameover", component: GameoverComponent}, 
  {path: "addplayerthree", component: AddPlayerThreeComponent}, 
  {path: "addplayerfour", component: AddPlayerFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
