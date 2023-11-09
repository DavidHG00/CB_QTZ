import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { SharedModule } from './shared/shared.module';
import { ServiciosComponentComponent } from './ServiciosComponent/ServiciosComponent.component';
import { EquiposComponentComponent } from './EquiposComponent/EquiposComponent.component';
import { SoftwareComponentComponent } from './SoftwareComponent/SoftwareComponent.component';

@NgModule({
  declarations: [				
    AppComponent,
      ServiciosComponentComponent,
      EquiposComponentComponent,
      SoftwareComponentComponent
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
