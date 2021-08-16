import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/shared/interfaces/card'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts: cart[]=[
    {src: 'https://via.placeholder.com/150/454443', Text: 'Casual men wearing cool shoe', color: 'Black', size: 'XL', quantity: 1, price: 120, total: 120},
    {src: 'https://via.placeholder.com/150/454443', Text: 'Casual men wearing cool shoe', color: 'Black', size: 'XL', quantity: 1, price: 120, total: 120},
    {src: 'https://via.placeholder.com/150/454443', Text: 'Casual men wearing cool shoe', color: 'Black', size: 'XL', quantity: 1, price: 120, total: 120},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
