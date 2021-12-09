import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
 

  addCarrito() {
    console.log('Añadir al carrito');
  }
 
 
  @Input() products: Product[] = [
    {
      id:'1',
      image: 'assets/Imagenes/1.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'2',
      image: 'assets/Imagenes/2.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'3',
      image: 'assets/Imagenes/3.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'4',
      image: 'assets/Imagenes/4.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'5',
      image: 'assets/Imagenes/6.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'6',
      image: 'assets/Imagenes/7.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'7',
      image: 'assets/Imagenes/1.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'8',
      image: 'assets/Imagenes/2.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'9',
      image: 'assets/Imagenes/3.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    },
    {
      id:'10',
      image: 'assets/Imagenes/4.png',
      title: 'Blabla',
      price: 100,
      description: 'blablablabla'
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
