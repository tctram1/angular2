import { Pipe, PipeTransform } from '@angular/core';

import { IProductInventory } from './product-inventory';

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {

    transform(value: IProductInventory[], filterBy: string): IProductInventory[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((productInventory: IProductInventory) =>
                productInventory.Product_Name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }




} //end of class