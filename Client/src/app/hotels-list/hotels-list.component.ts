import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hotelsList:{name: string, Detail: string}[] = [
    { "name":"Ritz Hotel", "Detail":"beautiful hotel with luxurious styles"},
    { "name":"DaysInn Hotel", "Detail":"beautiful hotel with luxurious styles"},
    { "name":"Pearl Continental", "Detail":"beautiful hotel with luxurious styles"},
    { "name":"Regent Plaza Hotel", "Detail":"beautiful hotel with luxurious styles"},
    { "name":"Ramada Plaza Hotel", "Detail":"beautiful hotel with luxurious styles"}

];
}
 