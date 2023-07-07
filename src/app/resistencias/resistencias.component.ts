import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})

export class ResistenciasComponent {
  res: any = {};
  banda1!: string;
  banda2!: string;
  multiplicador!: string;
  tolerancia!: string;

  calcularResistencia(): void {
    this.banda1 = this.banda1;
    this.banda2 = this.banda2;
    this.multiplicador = this.multiplicador;
    this.tolerancia = this.tolerancia;

    this.res.tot = (parseInt(this.banda1) * 10 + parseInt(this.banda2)) * Math.pow(10, parseInt(this.multiplicador));

    if (this.tolerancia === '1') {
      this.res.min = this.res.tot - (this.res.tot * 0.05);
      this.res.max = this.res.tot + (this.res.tot * 0.05);
    } else {
      this.res.min = this.res.tot - (this.res.tot * 0.1);
      this.res.max = this.res.tot + (this.res.tot * 0.1);
    }
  }

  setColor(color: string): string {
    const colores: { [key: string]: string } = {
      '0': '#000000',
      '1': '#541204',
      '2': '#E80B2C',
      '3': '#F48421',
      '4': '#F4F21E',
      '5': '#0B9E0B',
      '6': '#0B3EE8',
      '7': '#8B0BE8',
      '8': '#808080',
      '9': '#FFFFFF'
    };

    return colores[color];
  }

  setTolerancia(color: string): string {
    const colores: { [key: string]: string } = {
      '1': '#FFD700',
      '2': '#C0C0C0'
    };

    return colores[color];
  }
}
