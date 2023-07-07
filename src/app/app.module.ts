import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DistanciaComponent } from './distancia/distancia.component';

import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { PizzaReactiveComponent } from './formulario/pizza-reactive/pizza-reactive.component';
import { CineReactiveComponent } from './formulario/cine-reactive/cine-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    DistanciaComponent,
    ResistenciasComponent,
    PizzaReactiveComponent,
    CineReactiveComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
