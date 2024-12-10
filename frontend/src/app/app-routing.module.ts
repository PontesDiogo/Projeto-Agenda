import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormCompromissosComponent } from './form-agenda/form-agenda.component';
import { AgendaDeCompromissosComponent } from './agenda-de-compromissos/agenda-de-compromissos.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'compromissos', component: AgendaDeCompromissosComponent},
  {path: 'compromissos/:id', component: FormCompromissosComponent},
  {path: 'form-agenda', component: FormCompromissosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
