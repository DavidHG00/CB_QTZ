import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-personalizacioncomponent',
  templateUrl: './personalizacioncomponent.component.html',
  styleUrls: ['./personalizacioncomponent.component.css']
})
export class PersonalizacioncomponentComponent {

ngOnInit() {
}
productos = [
  {
    nombre: '',
    imagen: '',
    descripcion: '',
    precio: '',
    tipo: 'mausepad',
    visible: true
  },
  {
    nombre: '',
    imagen: '',
    descripcion: '',
    precio: '',
    tipo: 'mausepad',
    visible: true
  },
  {
    nombre: '',
    imagen: '',
    descripcion: '',
    precio: '',
    tipo: 'tazas',
    visible: true
  },
  {
    nombre: '',
    imagen: '',
    descripcion: ' ',
    precio: '',
    tipo: 'gorras',
    visible: true
  }
];

mostrarPlayeras() {
  this.productos.forEach(producto => {
    producto.visible = producto.tipo === 'playeras';
  });
}

mostrarTazas() {
  this.productos.forEach(producto => {
    producto.visible = producto.tipo === 'tazas';
  });
}
mostrarGorras() {
  this.productos.forEach(producto => {
    producto.visible = producto.tipo === 'gorras';
  });
}

mostrarTermos() {
  this.productos.forEach(producto => {
    producto.visible = producto.tipo === 'termos';
  });
}
mostrarCalzado() {
  this.productos.forEach(producto => {
    producto.visible = producto.tipo === 'calzado';
  });
}

mostrarMausepad() {
  this.productos.forEach(producto => {
    producto.visible = producto.tipo === 'mausepad';
  });
}
}