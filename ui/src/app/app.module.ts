import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import {HomeComponent} from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ItemInfoComponent } from './item-info/item-info.component';
import { ItemService } from './item/item.service';

@NgModule({
  imports:      [  
    BrowserModule,
    HttpModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {
    //     path: 'items',
    //     component: ItemComponent
    //   }
    // ]) 
    ],
  declarations: [ 
    AppComponent,
    ItemComponent,
    ItemInfoComponent,
    HomeComponent 
    ],
  bootstrap:    [ 
    AppComponent 
    ],
    providers: [
    ItemService
    ]
})
export class AppModule { }
