import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormularioComponent } from './pages/formulario/formulario.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { EncuestaRoutingModule } from './encuesta-routing.module';



@NgModule({
  declarations: [
    FormularioComponent,
    EstadisticasComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    EncuestaRoutingModule,
  ]
})
export class EncuestaModule { }
