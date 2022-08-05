import { Component, OnInit } from '@angular/core';
import { Encuesta, Iedades, IestadRedes } from '../../interfaces/encuesta.interface';
import { EncuestaService } from '../../services/encuesta.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html'
})
export class EstadisticasComponent implements OnInit {

  constructor(private encuestasService:EncuestaService) { }

  estadEncuesta:Encuesta = 
  {
    cantidad_encuesta: 0,
    tiempo_promedio:'',
    rango_edad: '',
    social_fav: '',
    social_no_fav: ''
  };

  tiempo_promedio:string='';
  rango_edad:string='';
  edades = Iedades;
  redes = IestadRedes;


  ngOnInit(): void {
    this.encuestasService.getEncuestas()
    .subscribe(resp=> this.estadEncuesta = resp)
  }

  buscar(red:string):void
  {
    this.encuestasService.getTiempoPromedio(red)
    .subscribe(resp => this.tiempo_promedio = resp.tiempo_promedio)
  }

  buscarEdad(edad:string):void
  {
    this.encuestasService.getSocialporRango(edad)
    .subscribe(resp => this.rango_edad = resp.rango_edad)
  }
}
