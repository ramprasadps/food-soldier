import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home.component';
import { AdminComponent } from './modules/admin/pages/admin.component';
import { MealsComponent } from './modules/admin/pages/config/meals/meals.component';
import { LocationComponent } from './modules/admin/pages/config/location/location.component';
import { MenuComponent } from './modules/admin/pages/config/menu/menu.component';
import { OrderHistoryComponent } from './modules/admin/pages/order-history/order-history.component';
import { TodayOrderComponent } from './modules/admin/pages/today-order/today-order.component';
import { PaymentHistoryComponent } from './modules/admin/pages/payment-history/payment-history.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'admin/mealConfig', component: MealsComponent},
  { path: 'admin/locationConfig', component: LocationComponent},
  { path: 'admin/menuConfig', component: MenuComponent},
  { path: 'admin/orderHistory', component: OrderHistoryComponent},
  { path: 'admin/todayOrder', component: TodayOrderComponent},
  { path: 'admin/paymentHistory', component: PaymentHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
