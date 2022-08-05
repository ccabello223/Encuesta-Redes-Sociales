export interface Encuesta {
    cantidad_encuesta: number;
    tiempo_promedio: string;
    rango_edad: string;
    social_fav:        string;
    social_no_fav:     string;
}

export interface EncuestaElement {
    edades:     string;
    email:      string;
    sexo:       string;
    social_fav: string;
    time_on_fc: number;
    time_on_ig: number;
    time_on_tk: number;
    time_on_tw: number;
    time_on_ws: number;
}

export var Iedades = ['18-25','26-33','34-40','40+']

export var Isexo = ['Masculino', 'Femenino']

export var Iredes = ['Facebook','WhatsApp','Twitter','Instagram','Tiktok']

export var IestadRedes = [
    {
      id:'time_on_fc',
      desc: 'Facebook'
    },
    {
        id:'time_on_ws',
        desc: 'WhatsApp'
    },
    {
        id:'time_on_tw',
        desc:'Twitter',
    },
    {
        id:'time_on_ig',
        desc: 'Instagram'
    },
    {
        id:'time_on_ws',
        desc: 'Tiktok'
    }
  ];