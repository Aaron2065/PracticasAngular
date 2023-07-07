import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  x1 = '';
  y1 = '';
  x2 = '';
  y2 = '';
  resultado:number = 0;
  final:number = 0;

  calcular():void{
    this.resultado = Math.sqrt(Math.pow((parseInt(this.x2) - parseInt(this.x1)), 2)  + (Math.pow((parseInt(this.y2) - parseInt(this.y1)), 2)));
    
  }
}
