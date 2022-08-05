import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Encuesta, EncuestaElement } from '../interfaces/encuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http:HttpClient) { }

  private baseUrl: string = 'http://127.0.0.1:5000';

  getEncuestas():Observable<Encuesta>
  {
    return this.http.get<Encuesta>(`${this.baseUrl}/encuestas`)
  }

  getSocialporRango(edad:string):Observable<Encuesta>
  {
    return this.http.get<Encuesta>(`${this.baseUrl}/encuestas/${edad}`)
  }

  getTiempoPromedio(id:string):Observable<Encuesta>
  {
    return this.http.get<Encuesta>(`${this.baseUrl}/encuestas/tiempo_promedio/${id}`)
  }
  
  agregarEncuesta(encuesta:EncuestaElement):Observable<EncuestaElement>
  {
    return this.http.post<EncuestaElement>(`${this.baseUrl}/encuestas`, encuesta)
  }
}