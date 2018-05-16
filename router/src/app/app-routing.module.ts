import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';
import { PermisionGuard } from './guard/permision.guard';
import { FocusGuard } from './guard/focus.guard';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: "full"}, //full prefix
  {path: 'home', component: HomeComponent},
  {path: 'consult', component: ConsultComponent, outlet:'aux'},
  {path: 'stock/:id', component: StockComponent, data:[{isPro:true}], 
    children: [
      {path:'', component: BuyerListComponent},
      {path:'seller/:id', component:SellerListComponent}
    ],
    canActivate: [PermisionGuard],
    canDeactivate: [FocusGuard]
  },
  {path: '**', component: Code404Component  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  
}
