import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsociadoComponent } from './components/asociado/asociado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ConductorComponent } from './components/conductor/conductor.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: 'asociado', component: AsociadoComponent},
  { path: 'conductor', component: ConductorComponent},
 



];


@NgModule({
  declarations: [
    AppComponent,
    AsociadoComponent,
    InicioComponent,
    ClienteComponent,
    PrincipalComponent,
    ConductorComponent,

  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
