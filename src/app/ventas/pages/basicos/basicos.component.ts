import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'cristóbal';
  nombreUpper: string = 'CRISTÓBAL';
  nombreCompleto: string = 'cRisTÓbAl gARíN';

  fecha: Date = new Date(); //Hoy y ahora

}
