import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ItemInfoComponent } from './item-info/item-info.component';


const routes: Routes = [
	{path: 'items', component: ItemComponent},
  {path: 'items/:id', component: ItemInfoComponent},
	{path: 'home', component: HomeComponent},
	{path: '',
    redirectTo: '/home',
    pathMatch: 'full'
	}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}