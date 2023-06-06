import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MensagemModule } from './components/mensagem/mensagem.module';
import { MasterPageComponent } from './components/master-page/master-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MasterPageComponent,    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    MensagemModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
