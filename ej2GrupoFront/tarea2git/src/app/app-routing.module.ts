import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { GuardarComponent } from './components/guardar/guardar.component';

const routes: Routes = [
  {path: 'lista', component: ListaComponent, title:'lista'},
  {path: 'guardar', component: GuardarComponent, title:'guardar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
