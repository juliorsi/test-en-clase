import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categorias } from 'src/app/core/interfaces/constants/categorias';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute
    )  {
      activatedRoute.params.subscribe(params => {
          console.log(params)
          if(params['id']){ 
           const categoriaEncontrada  = categorias.find(categoria => categoria.id == params['id']);
           if(categoriaEncontrada) {
            this.categoriaActual = categoriaEncontrada;
           }
          }


      })
     }

  ngOnInit() {
  }
categorias = categorias;
categoriaActual = this.categorias[0];
}
