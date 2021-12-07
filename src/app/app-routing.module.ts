import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {ListadoComponent} from './Components/listado/listado.component';
import { LoginComponent } from './Components/login/login.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
