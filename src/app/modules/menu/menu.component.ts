import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenuService} from "../../services/menu.service";
import {AuthService} from "../../services/Auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];


  constructor(private menuService: MenuService,private authService:AuthService) {
  }


  ngOnInit() {

    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: ['dashboard'],
        command: event => this.closeMenuRight()
      },
      {
        label: 'Books',
        icon: 'pi pi-fw pi-book',
        routerLink: ['book'],
        command: event => this.closeMenuRight()
      },
      {
        label: 'Authors',
        icon: 'pi pi-fw pi-users',
        routerLink: ['author'],
        command: event => this.closeMenuRight()
      },
      {
        label: 'Clients',
        icon: 'pi pi-fw pi-users',
        routerLink: ['client'],
        command: event => this.closeMenuRight()
      },
      {
        label: 'Transactions',
        icon: 'pi pi-fw pi-file',
        routerLink: ['transaction'],
        command: event => this.closeMenuRight()
      },
      {
        label: 'Categories',
        icon: 'pi pi-fw pi-file',
        routerLink: ['category'],
        command: event => this.closeMenuRight()
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-user-minus',
        command: event => this.authService.logout()
      },
    ]
  }

  closeMenuRight() {
    this.sidebarVisible = false

  }

  get sidebarVisible(): boolean {
    return this.menuService.sidebarVisible;
  }

  set sidebarVisible(value: boolean) {
    this.menuService.sidebarVisible = value;
  }

}
