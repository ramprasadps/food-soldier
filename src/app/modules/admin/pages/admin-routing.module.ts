import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/pages/home.component';
import { AdminComponent } from './admin.component';
import { MealsComponent } from '../pages/config/meals/meals.component';
import { LocationComponent } from '../pages/config/location/location.component';
import { MenuComponent } from '../pages/config/menu/menu.component';
import { OrderHistoryComponent } from '../pages/order-history/order-history.component';
import { TodayOrderComponent } from '../pages/today-order/today-order.component';
import { PaymentHistoryComponent } from '../pages/payment-history/payment-history.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'mealConfig',
      component: MealsComponent
    },
    {
      path: 'locationConfig',
      component: LocationComponent
    },
    {
      path: 'menuConfig',
      component: MenuComponent
    },
    {
      path: 'orderHistory',
      component: OrderHistoryComponent
    },
    {
      path: 'todayOrder',
      component: TodayOrderComponent
    },
    {
      path: 'paymentHistory',
      component: PaymentHistoryComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
