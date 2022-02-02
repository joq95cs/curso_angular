import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosEmpleadosService } from '../datos-empleados.service';
import { Empleado } from '../Empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private router: Router, private servicio:EmpleadosService, private servicioDatos:DatosEmpleadosService) {}

  ngOnInit(): void {

    this.empleados = this.servicioDatos.empleados;
  }

  volverHome() {

    this.router.navigate([""]);
  }

  agregarEmpleado() {

    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.servicio.mostrarMensaje("Nombre del empleado: " + empleado.nombre);
    this.servicioDatos.agregarEmpleado(empleado);
    this.volverHome();
  }

  titulo = 'Listado de Empleados';
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  empleados:Empleado[] = [];
}