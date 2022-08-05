import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:
    [
        {
            path:'formulario',
            component:FormularioComponent
        },
        {
            path:'estadisticas',
            component: EstadisticasComponent,
        },
        {
            path: '**',
            redirectTo: 'formulario'
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestaRoutingModule { }
