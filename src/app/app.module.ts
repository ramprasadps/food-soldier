import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { HomeComponent } from './modules/home/pages/home.component';
import { AppTitleComponent } from './shared/components/app-title/app-title.component';
import { SideNavComponent } from './modules/home/components/sidenav/sidenav.component';
import { FoodCardComponent } from './modules/home/components/food-card/food-card.component';
import { AdminComponent } from './modules/admin/pages/admin.component';
import { MealsComponent } from './modules/admin/pages/config/meals/meals.component';
import { MenuComponent } from './modules/admin/pages/config/menu/menu.component';
import { LocationComponent } from './modules/admin/pages/config/location/location.component';
import { OrderHistoryComponent } from './modules/admin/pages/order-history/order-history.component';
import { TodayOrderComponent } from './modules/admin/pages/today-order/today-order.component';
import { PaymentHistoryComponent } from './modules/admin/pages/payment-history/payment-history.component';
import { DialogModalComponent } from './modules/admin/pages/config/location/dialog-modal/dialog-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppTitleComponent,
    SideNavComponent,
    FoodCardComponent,
    AdminComponent,
    MealsComponent,
    MenuComponent,
    LocationComponent,
    OrderHistoryComponent,
    TodayOrderComponent,
    PaymentHistoryComponent,
    DialogModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [SideNavComponent, DialogModalComponent],
  providers: [],
  bootstrap: [
    HomeComponent, SideNavComponent
  ]
})
export class AppModule { }
