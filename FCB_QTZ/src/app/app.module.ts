import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { SharedModule } from './shared/shared.module';
import { ServiciosComponentComponent } from './Components/ServiciosComponent/ServiciosComponent.component';
import { EquiposComponentComponent } from './Components/EquiposComponent/EquiposComponent.component';
import { SoftwareComponentComponent } from './Components/SoftwareComponent/SoftwareComponent.component';
import { ImageCarouselComponent } from './Components/image-carousel/image-carousel.component';
import { PersonalizacioncomponentComponent } from './Components/personalizacioncomponent/personalizacioncomponent.component';
import { LoginComponent } from './Components/Login/Login.component';


@NgModule({
  declarations: [					
    AppComponent,
      ServiciosComponentComponent,
      EquiposComponentComponent,
      SoftwareComponentComponent,
      ImageCarouselComponent,
      PersonalizacioncomponentComponent,
      LoginComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
