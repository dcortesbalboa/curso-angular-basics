import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponent{
    title = 'contador bases';
    numero: number=10;
  
    base: number=5;
  
    acumular(num:number){
      this.numero=this.numero+num;
    }
}