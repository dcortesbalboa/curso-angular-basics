import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes:Personaje[]=[
        {nombre: "Goku",
        poder:10000},
        {nombre: "Vegeta",
      poder:2500}
      
       ];
       
    constructor(){
        console.log("servicio inicializado");
    }

    anadirPersonaje(personaje: Personaje){
        console.log(personaje);
        if(personaje.nombre.trim().length===0){
          return;
        }
        this._personajes.push({...personaje});
      }

      get personajes(): Personaje[]{
        return [...this._personajes];
      }
}