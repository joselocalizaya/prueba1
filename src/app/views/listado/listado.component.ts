import { Entrada } from './../../shared/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  public listadoEntradas: Entrada[];

  constructor() {
    this.listadoEntradas = [
      {
        titulo: 'Introduccion a Angular',
        resumen: 'En esta leccion realizaremos una pequeña introduccion'
      },
      {
        titulo: 'Typescript como lenguaje para Angular',
        resumen: 'Breve recorrido por el lenguaje Typescript'
      },
      {
        titulo: 'Componenetes en Angular',
        resumen: 'Aprenderemos a usar los componenetes'
      }
    ];
  }

  ngOnInit(): void {

  }

  public mostrarTitulo(titulo: string):void {
    alert(`Entrada seleccionada: ${ titulo }.`);
  }
}
