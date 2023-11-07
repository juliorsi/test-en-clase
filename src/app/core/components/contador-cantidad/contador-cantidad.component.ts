import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador-cantidad',
  templateUrl: './contador-cantidad.component.html',
  styleUrls: ['./contador-cantidad.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ContadorCantidadComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Output() cantidadCambiada = new EventEmitter <number>();
  @Input()  cantidadInicial:number = 1;

  cantidad=1;

  sumar(){
    this.cantidad = this.cantidad+1;
    this.cantidadCambiada.emit(this.cantidad);
  
  }

  restar(){
    if(this.cantidad > 1){ 
      this.cantidad = this.cantidad-1;
      this.cantidadCambiada.emit(this.cantidad);
    }
  }

}
