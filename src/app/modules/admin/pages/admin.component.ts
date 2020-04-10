import { Component, OnInit } from '@angular/core';
import { AdminOption } from '../../../shared/entity/admin-option'
import { ConfigMenu } from '../../../shared/entity/config-menu'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminConfigList:Array<AdminOption> = [];
  configMenuList:Array<ConfigMenu> = [];

  constructor(public route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.buildAdminOptions();
    this.buildConfigMenus();
  }

  buildAdminOptions():void{
    this.adminConfigList.push({
      menuName: 'Today\'s Order',
      menuPath: 'todayOrder',
      menuLink: '/todayOrder'
    });
    this.adminConfigList.push({
      menuName: 'Order History',
      menuPath: 'orderHistory',
      menuLink: '/orderHistory'
    });
    this.adminConfigList.push({
      menuName: 'Payment History',
      menuPath: 'paymentHistory',
      menuLink: '/paymentHistory'
    });
  }

  buildConfigMenus():void{
    this.configMenuList.push({
      menuName: 'Meals of the Day',
      menuPath: 'mealConfig',
      menuLink: '/mealConfig'
    });
    this.configMenuList.push({
      menuName: 'Location',
      menuPath: 'locationConfig',
      menuLink: '/locationConfig'
    });
    this.configMenuList.push({
      menuName: 'Menu',
      menuPath: 'menuConfig',
      menuLink: '/menuConfig'
    });
  }

  handleAdminItemClick(adminConfig:string): void{
    this.navigate(adminConfig);
  }

  configConfigMenuItemClick(configMenu:string): void{
    this.navigate(configMenu);
  }

  navigate(menu:string): void{
    this.router.navigate(['/admin' + menu['menuLink']], { relativeTo: this.route }).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
