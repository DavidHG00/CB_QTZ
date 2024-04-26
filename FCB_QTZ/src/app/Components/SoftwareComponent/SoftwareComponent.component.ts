import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SoftwareComponent',
  templateUrl: './SoftwareComponent.component.html',
  styleUrls: ['./SoftwareComponent.component.css']
})
export class SoftwareComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  productos = [
    {
      nombre: 'Paginas web ventas',
      imagen: '',
      descripcion: 'Pagina web de ventas',
      precio: '30,428.30',
      tipo: 'web',
      visible: true
    },
    {
      nombre: 'Pagina web Gym',
      imagen: '',
      descripcion: 'Pagina web de Gym',
      precio: '$29,390',
      tipo: 'web',
      visible: true
    },
    {
      nombre: 'Software de ventas',
      imagen: '',
      descripcion: 'Sotware de administracion de productos ideal para tiendas de abarrotes',
      precio: '$16,690',
      tipo: 'local',
      visible: true
    },
    {
      nombre: 'Software de Gym',
      imagen: '',
      descripcion: 'Sotware de administracion de clientes',
      precio: '$16,690',
      tipo: 'local',
      visible: true
    }
  ];

  mostrarweb() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'web';
    });
  }
  
  mostrarlocal() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'local';
    });
  }

}
