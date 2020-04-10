import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css'],
  host: { 
    '(click)': 'addProductToCart()'
  }
})

export class FoodCardComponent implements OnInit {

  @Input() cardData: any;

  cardTitle:string;
  cardSubtitle:string;

  constructor() {}

  ngOnInit(): void {
    this.cardTitle = this.cardData.cardTitle;
    this.cardSubtitle = this.cardData.cardSubtitle;
  }

  @HostListener('click', ['$event'])
  addProductToCart(event: any) {
    console.log('clicked ' + event);
  }

}
