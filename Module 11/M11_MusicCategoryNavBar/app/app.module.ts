import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { MusicCategoriesComponent } from './MusicCategories/music-categories.component';
import { MusicInventoryComponent } from './MusicInventory/music-inventory.component';
import { MusicInventoryDetailComponent } from './MusicInventory/music-inventory-detail.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'categories', component: MusicCategoriesComponent },
      { path: 'products', component: MusicInventoryComponent },
      { path: 'product/:id', component: MusicInventoryDetailComponent },
      { path: '', redirectTo: 'categories', pathMatch: 'full' }
    ])
  ],

  declarations: [
      AppComponent,
      MusicCategoriesComponent,
      MusicInventoryComponent,
      MusicInventoryDetailComponent
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
