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
import { SessionComponent } from './session/session.component';
import { HttpClientModule } from '@angular/common/http';


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
    SessionComponent
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
