import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.css']
})

export class AppTitleComponent {
  title:string = '';

  constructor(private elementRef: ElementRef) {
    this.title = elementRef.nativeElement.getAttribute('title')
  }
}