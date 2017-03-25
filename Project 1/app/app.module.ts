import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { ProductCategoryComponent } from './ProductCategory/product-category.component';
import { ProductInventoryComponent } from './ProductInventory/product-inventory.component';
import { ProductFilterPipe } from './ProductInventory/product-inventory.pipe';
import { ProductInventoryDetailComponent } from './ProductInventory/product-inventory-detail.component';
import { ProductInventoryByCategoryComponent } from './ProductInventory/product-inventory-byCategory.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
        { path: 'category', component: ProductCategoryComponent },
        { path: 'products', component: ProductInventoryComponent },
        { path: 'category/:CatID', component: ProductInventoryByCategoryComponent},
        { path: 'products/:SKU', component: ProductInventoryDetailComponent },
        { path: 'home', component: WelcomeComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
      ])
    ],


  declarations: [ 
    AppComponent,
    WelcomeComponent,
    ProductCategoryComponent,
    ProductInventoryComponent,
    ProductFilterPipe,
    ProductInventoryDetailComponent,
    ProductInventoryByCategoryComponent
    ],


  bootstrap: [ 
    AppComponent 
    ]

    
})
export class AppModule { }
