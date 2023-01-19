import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroeBorrado: string ='';
  heroes: string[]=['SpiderMan', 'Iron man', 'Hulk', 'Thor'];
  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('OnInit');
  }


  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() ?? '';
    console.log("borrando", this.heroeBorrado);
    
  }
}
