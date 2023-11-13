import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-EquiposComponent',
  templateUrl: './EquiposComponent.component.html',
  styleUrls: ['./EquiposComponent.component.css']
})
export class EquiposComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  accion1() {
    console.log('Realizar acción 1');
    // Lógica correspondiente a la opción 1
  }

  accion2() {
    console.log('Realizar acción 2');
    // Lógica correspondiente a la opción 2
  }
}

