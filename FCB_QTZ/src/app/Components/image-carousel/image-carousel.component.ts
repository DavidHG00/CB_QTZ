import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit, OnDestroy {
  private elemento: HTMLElement | null = null;

  ngOnInit(): void {
    this.elemento = document.querySelector('.mat-mdc-tab-body-content.ng-tns-c737557735-1.ng-trigger.ng-trigger-translateTab') as HTMLElement;
    if (this.elemento) {
      this.elemento.style.overflow = 'hidden';
    }
  }

  ngOnDestroy(): void {
    if (this.elemento) {
      this.elemento.style.overflow = ''; // Restaura el comportamiento predeterminado al salir del componente
    }
  }
}
