import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

// Adding interpolation
export class ProductListComponent {
    pageTitle: string = 'Product List';
}