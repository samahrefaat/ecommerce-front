import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen:boolean=false;
  isAdd:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  toggleNavbar(){
    this.isOpen = !this.isOpen
  }
  dropdown(){
    this.isAdd = !this.isAdd

  }
  drop(){
    
    this.isAdd = !this.isAdd
  }

}
