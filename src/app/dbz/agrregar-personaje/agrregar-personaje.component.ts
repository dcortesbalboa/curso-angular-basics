import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { outputAst } from '@angular/compiler';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agrregar-personaje',
  templateUrl: './agrregar-personaje.component.html',
  styleUrls: ['./agrregar-personaje.component.css']
})
export class AgrregarPersonajeComponent {
  nuevo: Personaje={
    nombre: '',
    poder: 0
  }

  constructor(public readonly dbzService: DbzService){
    
  }

  agregar(){
    this.dbzService.anadirPersonaje({...this.nuevo})
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.limpiarNuevo();
  }

  limpiarNuevo():void{
    this.nuevo.nombre='';
    this.nuevo.poder=0;

  }

}
