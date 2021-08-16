import { Component, OnInit } from '@angular/core';

import { seller } from 'src/app/shared/interfaces/seller'

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.scss']
})
export class JewelleryComponent implements OnInit {
  page=1;
  collectionSize=70;
  bestSeller: seller[]=[
    {src: 'https://via.placeholder.com/150/454443', text: 'Cruise Dual Analog', price: '250.00', rate: 4},
    {src: 'https://via.placeholder.com/150/454443', text: 'Crown Summit Backpack', price: '250.00', rate: 4},
    {src: 'https://via.placeholder.com/150/454443', text: 'Joust Duffle Bag', price: '250.00', rate: 4},
    {src: 'https://via.placeholder.com/150/454443', text: 'Cruise Dual Analog', price: '250.00', rate: 4},
    {src: 'https://via.placeholder.com/150/454443', text: 'Crown Summit Backpack', price: '250.00', rate: 4},
    {src: 'https://via.placeholder.com/150/454443', text: 'Joust Duffle Bag', price: '250.00', rate: 4},
    {src: 'https://via.placeholder.com/150/454443', text: 'Cruise Dual Analog', price: '250.00', rate: 4},
    {src: 'https://via.placeholder.com/150/454443', text: 'Crown Summit Backpack', price: '250.00', rate: 4},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
