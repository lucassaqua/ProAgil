import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
   declarations: [
      AppComponent,
      EventosComponent // isso é o que possibilita que app.component.html veja a component eventos
   ],                 // e saiba o que é o <app-eventos>
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule  // é o que vai permitir pegar os eventos do backend,
   ],                  // para mostrar no frontend
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
