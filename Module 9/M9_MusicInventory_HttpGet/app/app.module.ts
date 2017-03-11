import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { MusicCategoriesComponent } from './MusicCategories/music-categories.component';
import { MusicInventoryComponent } from './MusicInventory/music-inventory.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule
    ],

  declarations: [
      AppComponent,
      MusicCategoriesComponent,
      MusicInventoryComponent,
      ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
