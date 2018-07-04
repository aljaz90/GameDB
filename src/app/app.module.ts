import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomovComponent } from './content/domov/domov.component';
import { PodstranComponent } from './content/podstran/podstran.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { SearchComponent } from './content/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    DomovComponent,
    PodstranComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
