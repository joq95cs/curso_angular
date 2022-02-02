import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor() {//Se inyecta en el componente principal el servicio creado
  }

  ngOnInit(): void { //Se ejecuta inmediatamente después del constructor
  }
}