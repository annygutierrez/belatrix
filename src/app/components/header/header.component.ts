import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu = [
    {id: 0, name: "item 1"},
    {id: 1, name: "item 2"},
    {id: 2, name: "item 3"},
    {id: 3, name: "item 4"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
