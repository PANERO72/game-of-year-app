import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from "./../environments/environment";

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VotarComponent } from './pages/votar/votar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VotarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }