import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Cristóbal";
  genero: string = "masculino";

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(): void {
    console.log("Cambiar cliente... from p-button");
    switch (this.genero) {
      case 'masculino':
        this.nombre = 'Diana';
        this.genero = 'femenino';
        break;
      case 'femenino':
        this.nombre = 'Cristóbal';
        this.genero = 'masculino';
    }
  }

  borrarCliente(): void {
    console.log("borrar cliente... from button pButton")
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Cristóbal',
    edad: 30,
    dirección: 'Viña del Mar, Chile'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(5000); //0,1,2,3,4,5...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  });
}
