import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine-reactive',
  templateUrl: './cine-reactive.component.html',
  styleUrls: ['./cine-reactive.component.css']
})
export class CineReactiveComponent {
  cineForm!:FormGroup;
  totalFinalFinal:number = 0;
  

  constructor(private readonly fb: FormBuilder) {
    this.cineForm = this.initForm();
  }

  onSubmit():void{
    //console.log('Form ->', this.cineForm.value)
    this.obtenerDatos();
  }

  obtenerDatos():void{
    let maximoBoletos:number = 0;
    let boleto:number = 12;
    let subtotal:number = 0;
    let total:number = 0;
    let totalFinal:number = 0;
    
    const cantidadCompradores = this.cineForm.get('cantidadCompradores')?.value
    console.log('cantidadCompradores', cantidadCompradores)

    const cantidadBoletos = this.cineForm.get('cantidadBoletos')?.value
    console.log('cantidadBoletos', cantidadBoletos)

    const tarjeta = this.cineForm.get('tarjeta')?.value
    console.log('tarjeta', tarjeta)

    maximoBoletos = cantidadCompradores * 7
    console.log('maximoBoletos', maximoBoletos)

    if(cantidadBoletos > maximoBoletos){
      console.log('Tu cantidad de boletos supera el limite')
    }
    else{
      if(cantidadBoletos > 5){
        subtotal = cantidadBoletos * 12
        const descuento = subtotal * 0.15
        total = subtotal - descuento
        console.log('total', total)
      }
      else if (cantidadBoletos >= 3){
        subtotal = cantidadBoletos * 12
        const descuento = subtotal * 0.10
        total = subtotal - descuento
        console.log('total', total)
      }
      else{
        subtotal = cantidadBoletos * 12
        console.log('total', total)
      }

      if (tarjeta == 'si'){
        const descuento = total * 0.10
        totalFinal = total - descuento
        console.log('totalFinal', totalFinal)
        this.totalFinalFinal = totalFinal;
      }
      else{
        console.log('No tienes descuento de tarjeta')
        totalFinal = total;
        this.totalFinalFinal = totalFinal;
      }
    }
  }


  agregarTotal(): void {
    this.totalFinalFinal = this.totalFinalFinal;
  }  

  initForm():FormGroup{
    return this.fb.group({
      nombre:['', [Validators.required]],
      cantidadCompradores:['', [Validators.required]],
      tarjeta:['', [Validators.required]],
      cantidadBoletos:['', [Validators.required]]
    })
  }

}
