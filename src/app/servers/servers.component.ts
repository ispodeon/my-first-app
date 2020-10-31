import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', // as an attribute
  // selector: '.app-servers', // as a class
  // templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
