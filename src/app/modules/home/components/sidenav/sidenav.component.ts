import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';
import { FoodCard } from '../../../../shared/entity/food-card'
import { SidemenuOption } from '../../../../shared/entity/sidemenu-option'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  // navItemList = ["Home", "Admin Configuration", "Past Orders", "Contact Us"];
  sidemenuOptionList: Array<SidemenuOption> = [];
  cardDataList:Array<FoodCard> = [];

  private _mobileQueryListener: () => void;

  routerUrl: string;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 2000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.routerUrl = router.url;
  }

  ngOnInit(): void {
    this.buildCardData();
    this.buildSidemenuOptions();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public buildCardData(): void {
    this.cardDataList.push({
      cardTitle: 'Breakfast',
      cardSubtitle: '',
      cardColor: '#ff793f'
    });
    this.cardDataList.push({
      cardTitle: 'Lunch',
      cardSubtitle: '',
      cardColor: '#227093'
    });
    this.cardDataList.push({
      cardTitle: 'Dinner',
      cardSubtitle: '',
      cardColor: '#218c74'
  });
  }

  public buildSidemenuOptions():void {
    this.sidemenuOptionList.push({
      menuName: 'Home',
      menuPath: 'home',
      menuLink: '/home'
    });
    this.sidemenuOptionList.push({
      menuName: 'Admin',
      menuPath: 'admin',
      menuLink: '/admin'
    });
    this.sidemenuOptionList.push({
      menuName: 'Contact',
      menuPath: 'contact',
      menuLink: '/contact'
    });
  }

  handleNavItemClick(navItem:string): void{
    this.router.navigate([navItem['menuLink']]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
