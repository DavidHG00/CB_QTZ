import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';



@Component({
  selector: 'app-EquiposComponent',
  templateUrl: './EquiposComponent.component.html',
  styleUrls: ['./EquiposComponent.component.css']
})
export class EquiposComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  productos = [
    {
      nombre: 'Laptop Hp 240 g7',
      imagen: 'assets/laptophp240g7.jpg',
      descripcion: 'Procesador AMD Athlon 3020e, Memoria Interna 500 GB, Memoria RAM 4 GB',
      precio: '$5,000',
      tipo: 'computadora',
      visible: true
    },
    {
      nombre: 'HyperX QuadCast',
      imagen: 'assets/OIP.jpg',
      descripcion: 'Usos recomendados para producto: Streaming, Singing, Gaming, Marca: HyperX, Nombre del modelo: QuadCast, Tecnología de conectividad: USB, Tipo de conector: USB, Característica especial: 4 patrones polares, Dispositivos compatibles: Ordenador personal, Color: Negro, Componentes incluidos: Cable, Soporte y Anti Vibración, Patrón polar: Bidireccional, Cardioide',
      precio: '$2,390',
      tipo: 'microfono',
      visible: true
    },
    {
      nombre: 'Laptop Acer Swift 7',
      imagen: 'assets/LaptopAcerswift7.jpg',
      descripcion: 'Tipo de procesador	Intel Core i7 Número de procesadores	2 Tamaño de RAM	8 GB Tecnología de la memoria	LPDDR3 Memoria máxima compatible	8 GB Tamaño de la unidad de disco duro	256 GB Descripción del disco duro	SSD',
      precio: '$13,690',
      tipo: 'computadora',
      visible: true
    },
    {
      nombre: 'Laptop Asus Rog Strix Scar II',
      imagen: 'assets/laptopAsusrogstrixscarii.jpg',
      descripcion: 'Tipo de procesador	Ryzen 9 Velocidad del procesador	3,3 GHz Número de procesadores	8 Tamaño de RAM	32 GB Tecnología de la memoria	DDR4 Tamaño de la unidad de disco duro	2 TB Descripción del disco duro	SSD',
      precio: '$23,690',
      tipo: 'computadora',
      visible: true
    },
    {
      nombre: 'Laptop Asus Rog Strix Scar II',
      imagen: 'assets/laptopAsusrogstrixscarii.jpg',
      descripcion: 'Tipo de procesador	Ryzen 9 Velocidad del procesador	3,3 GHz Número de procesadores	8 Tamaño de RAM	32 GB Tecnología de la memoria	DDR4 Tamaño de la unidad de disco duro	2 TB Descripción del disco duro	SSD',
      precio: '$23,690',
      tipo: 'computadora',
      visible: true
    },
    {
      nombre: 'Pc Gaming A8 7680 personalizado',
      imagen: 'assets/pc gaming.jpg',
      descripcion: '8G/16G RAM, 120G/500G SSD, NVME, Pc Gamer completo para escritorio, mini PC Gaming',
      precio: '$13,380',
      tipo: 'computadora',
      visible: true
    },
    {
      nombre: 'Razer Naga Pro',
      imagen: 'assets/MauseRazer.jpg',
      descripcion: 'Tecnología de conectividad	USB Característica especial	Inalámbrico 3 placas laterales intercambiables para configuraciones de botones personalizadas (19+1) botones programables para controles extendidos Sensor óptico Razer Focus+ 20K DPI',
      precio: '$2,300',
      tipo: 'mause',
      visible: true
    },
    {
      nombre: 'Mouse Logitech G203',
      imagen: 'assets/MauseLogitech.jpg',
      descripcion: 'Marca: Logitech G Cantidad de botones: 6 Es inalámbrico: No',
      precio: '$690',
      tipo: 'mause',
      visible: true
    },
    {
      nombre: 'JBL Tune 510BT',
      imagen: 'assets/JBL.jpg',
      descripcion: 'Nombre del modelo	JBL TUNE 510BT - Blue Tecnología de conectividad	Inalámbrico Color	Blanco',
      precio: '$650',
      tipo: 'audifonos',
      visible: true
    }
  ];

  mostrarMicrofonos() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'microfono';
    });
  }
  
  mostrarComputadoras() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'computadora';
    });
  }
  
  mostrarMause() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'mause';
    });
  }
  
  mostrarAudifonos() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'audifonos';
    });
  }
  mostrarProcesador() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'procesador';
    });
  }
  mostrarMotherboard() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'motherboard';
    });
  }
  
  mostrarMemoriasRam() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'memoriasram';
    });
  }
  
  mostrarAlmacenamiento() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'almacenamiento';
    });
  }
  
  mostrarFuentesdepoder() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'fuentesdepoder';
    });
  }
  mostrarGabinetes() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'gabinete';
    });
  }
  mostrarTarjetasGraficas() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'tarjetagrafica';
    });
  }
  mostrarEnfriamiento() {
    this.productos.forEach(producto => {
      producto.visible = producto.tipo === 'enfriamiento';
    });
  }
  
  Pcarmadas(){
    console.log("Action");
  }
  Personalizarpc(){
    console.log("Action");
  }
  }



