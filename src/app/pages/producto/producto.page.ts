import { Component, OnInit, inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { categorias } from 'src/app/core/interfaces/constants/categorias';
import { Producto } from 'src/app/core/interfaces/productos';
import { CarritoService } from 'src/app/core/services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  router = inject(Router)

  constructor(
    private activatedRoute: ActivatedRoute,
    private carritoService: CarritoService) { 
      activatedRoute.params.subscribe(params=> {
        console.log(params)
        categorias.forEach(categoria => {
         const productoEncontrado = categoria.productos.find(producto => producto.id == params ['id']);
          if(productoEncontrado){
            this.producto = productoEncontrado
          }
          
        })
      })
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

 producto: Producto = {
  nombre: '',
    precio: 0,
    ingredientes: [],
    imgUrl: '',
    id: 0
 }
 cantidad=1

onAgregarAlCarritoClicked (){
  this.carritoService.agregarProducto(this.producto,this.cantidad);
  console.log(this.carritoService.carrito);
  this.router.navigate(['tabs/tab1'])
  
}
}
