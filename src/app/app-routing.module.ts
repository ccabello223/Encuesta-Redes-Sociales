import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './shared/welcome/welcome.component';

const routes: Routes = [
  {
    path:'encuesta',
    loadChildren: () => import('./encuesta/encuesta.module').then(m => m.EncuestaModule)
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
