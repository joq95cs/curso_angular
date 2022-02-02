import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { EmpleadoCaracteristicasComponent } from './empleado-caracteristicas/empleado-caracteristicas.component';
import { EmpleadosService } from './empleados.service';
import { DatosEmpleadosService } from './datos-empleados.service';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';

const appRoutes: Routes=[

  {path: '', component: HomeComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'actualizar/:id', component: ActualizarComponent},
  {path: '**', component: ErrorPersonalizadoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    EmpleadoCaracteristicasComponent,
    ContactoComponent,
    NosotrosComponent,
    ProyectosComponent,
    HomeComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmpleadosService, DatosEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }