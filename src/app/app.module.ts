import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire'; 
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { StartComponent } from './start/start.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AddPlayerTwoComponent } from './add-player-two/add-player-two.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SelectTypeComponent } from './select-type/select-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


import {MatRadioModule} from '@angular/material/radio';
import { SuppliesComponent } from './supplies/supplies.component';
import {MatButtonModule} from '@angular/material/button';
import { ChoiceComponent } from './choice/choice.component';
import { ViewSuppliesComponent } from './view-supplies/view-supplies.component';
import { FirstStopComponent } from './first-stop/first-stop.component';

import { HttpClientModule } from '@angular/common/http';
import { PhoenixComponent } from './phoenix/phoenix.component';
import { ElPasoComponent } from './el-paso/el-paso.component';
import { HoustonComponent } from './houston/houston.component';
import { OrleansComponent } from './orleans/orleans.component';
import { BirmingComponent } from './birming/birming.component';
import { AtlantaComponent } from './atlanta/atlanta.component';
import { NashvilleComponent } from './nashville/nashville.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DetroitComponent } from './detroit/detroit.component';
import { BaltiComponent } from './balti/balti.component';
import { PhillyComponent } from './philly/philly.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { FinalComponent } from './final/final.component';
import { GameoverComponent } from './gameover/gameover.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AddPlayerTwoComponent,
    WelcomeComponent,
    SelectTypeComponent,
    SuppliesComponent,
    ChoiceComponent,
    ViewSuppliesComponent,
    FirstStopComponent,
    PhoenixComponent,
    ElPasoComponent,
    HoustonComponent,
    OrleansComponent,
    BirmingComponent,
    AtlantaComponent,
    NashvilleComponent,
    ChicagoComponent,
    DetroitComponent,
    BaltiComponent,
    PhillyComponent,
    NewyorkComponent,
    FinalComponent,
    GameoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireDatabaseModule, 
    HttpClientModule,
    ReactiveFormsModule, BrowserAnimationsModule, 

    MatRadioModule, 
    MatButtonModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
