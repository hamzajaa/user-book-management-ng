import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;


  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.items = [];

  }


  openMenuRight() {
    this.sidebarVisible = true
  }



  // navigateToBooks() {
  //   this.router.navigate(['/book']);
  //   this.sidebarVisible = false; // Close the sidebar after navigating
  // }

  get sidebarVisible(): boolean {
    return this.menuService.sidebarVisible;
  }

  set sidebarVisible(value: boolean) {
    this.menuService.sidebarVisible = value;
  }
}
