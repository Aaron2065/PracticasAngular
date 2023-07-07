import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizza-reactive',
  templateUrl: './pizza-reactive.component.html',
  styleUrls: ['./pizza-reactive.component.css']
})
export class PizzaReactiveComponent{
  pizzaForm!:FormGroup;
  registrosPizzas:any[] = [];
  subtotalVentasTerminadas: { nombre: string, subtotal: number, total:number }[] = [];
  totalVentas: number = 0;

  constructor(private readonly fb: FormBuilder) {
    this.pizzaForm = this.initForm();
  }

  onSubmit():void{
    //console.log('Form ->', this.pizzaForm.value)
    this.obtenerDatos();
  }

  obtenerDatos():void{
    let sub:number = 0;
    let jamon:string = "";
    let pina:string = "";
    let champinones:string = "";

    const nombre = this.pizzaForm.get('nombre')?.value
    console.log('nombre', nombre)

    const num = this.pizzaForm.get('num')?.value
    console.log('num', num)

    const tamanio = this.pizzaForm.get('tamanio')?.value
    console.log('tamanio', tamanio)
    if (tamanio == 'Chica'){
      sub = 80 * num
    }
    else if (tamanio == 'Mediana'){
      sub = 100 * num
    }else
      sub = 120 * num
    
    const Jamon = this.pizzaForm.get('Jamon')?.value
    console.log('ingrediente1', Jamon)
    if (Jamon == true){
      jamon = "Jamón"
      sub = sub + 10
    }

    const Pina = this.pizzaForm.get('Pina')?.value
    console.log('ingrediente2', Pina)
    if (Pina == true){
        pina = "Piña"
        sub = sub + 10
    }

    const Champinones = this.pizzaForm.get('Champinones')?.value
    console.log('ingrediente3', Champinones)
    if (Champinones == true){
      champinones = "Champiñones"
      sub = sub + 10
    }

    console.log('sub', sub)

    this.registrosPizzas.push({
      nombre: nombre,
      tamanio: tamanio,
      ingredientes: [jamon, pina, champinones],
      num: num,
      subtotal: sub
    });
  }

  eliminarUltimoRegistro(): void {
    this.registrosPizzas.pop();
  }

  eliminarRegistros(): void {
    this.registrosPizzas = [];
  }

  agregarSubtotal(): void {
    const ultimoRegistro = this.registrosPizzas[this.registrosPizzas.length - 1];
    const subtotal = ultimoRegistro.subtotal;
    const nombre = ultimoRegistro.nombre;
    const total = ultimoRegistro.sub
    this.subtotalVentasTerminadas.push({ nombre, subtotal, total });

    this.eliminarRegistros();

    this.totalVentas += subtotal;
  }  

  initForm():FormGroup{
    return this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(5)]],
      tamanio:['', [Validators.required]],
      Jamon:[''],
      Pina:[''],
      Champinones:[''],
      num:['', [Validators.required, Validators.minLength(1)]]
    })
  }
}
