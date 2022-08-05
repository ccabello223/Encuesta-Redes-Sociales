import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EncuestaElement, Iedades, Iredes, Isexo } from '../../interfaces/encuesta.interface';
import { EncuestaService } from '../../services/encuesta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles:[`
    .without::-webkit-datetime-edit-ampm-field {
    display: none;
    }
  `]
})
export class FormularioComponent implements OnInit {

  constructor(private encuestasService:EncuestaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  guardar()
  {
    //Validacion para que sea obligatorio un campo
    if(this.repuesta.email.trim().length, this.repuesta.edades.trim().length,
        this.repuesta.sexo.trim().length, this.repuesta.social_fav.trim().length === 0)
    {
      alert("Faltan Parametros")
      return;
    } 

    //Agregar Encuesta
    this.encuestasService.agregarEncuesta(this.repuesta)
      .subscribe(repuesta => {
        this.router.navigate(['/encuesta/formulario', repuesta])
      });
  }
  
  edades = Iedades
  sexo = Isexo
  redes = Iredes

  repuesta:EncuestaElement=
  {
    email:'',
    edades:'',
    sexo:'',
    social_fav:'',
    time_on_fc: 0,
    time_on_ws: 0,
    time_on_tw: 0,
    time_on_ig: 0,
    time_on_tk: 0
  }
}
