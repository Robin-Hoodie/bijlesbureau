import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public links: Link[];

  constructor() { }

  ngOnInit() {
    this.links = [
      {
        description: 'HOME', url: '/home'
      }, {
        description: 'STUDENT', url: '/student'
      }, {
        description: 'TEACHER', url: '/teacher'
      }
    ];
  }

}


export class Link {
  description: string;
  url: string;
}
