import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{

    nombre: string="Iron man";
    edad: number=45;

    obtenerNombre(): string{
        return ` ${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre='Spider Man';
    }

    cambiarEdad(): void{
        this.edad=38;
    }

    get capitalizarNombre(): string{
        return this.nombre.toUpperCase();
    }
}