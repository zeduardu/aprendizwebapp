import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class SidenavComponent implements OnInit {

  sidenavItems = [
    {link: '/noticias', title: 'Notícias', icon: ''},
    {link: '/noticias', title: 'Notícias', icon: ''},
    {link: '/noticias', title: 'Notícias', icon: ''},
  ];

  constructor() { }

  ngOnInit(): void {
    //do nothing
  }

}
