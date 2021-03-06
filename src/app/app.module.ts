import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomovComponent } from './content/domov/domov.component';
import { PodstranComponent } from './content/podstran/podstran.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { SearchComponent } from './content/search/search.component';
import { GamedetailsComponent } from './content/gamedetails/gamedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    DomovComponent,
    PodstranComponent,
    SearchComponent,
    GamedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
