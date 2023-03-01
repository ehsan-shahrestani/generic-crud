import {Component, OnInit} from '@angular/core';

export interface IMenuItems {
  title: string;
  routerLink?: string
  icon?: string;
  items?: IMenuItems[];

}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: IMenuItems[] = []

  constructor() {

  }

  ngOnInit() {
    this.menuItems = [
      {
        title: 'list',
        items: [
          {
            title: 'company',
            routerLink: '/admin/company'
          },
          {
            title: 'employees',
            routerLink: '/admin/employee'
          }
        ]

      }
    ]

  }
}
