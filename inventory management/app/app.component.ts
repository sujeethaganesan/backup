import { Component } from '@angular/core';
import { Product } from './product';
@Component({
  selector: 'inventory-app',
  template:`<div class="inventory-app">
  			<product-list [productList]="product" (onProductSelected)="productWasSelected($event)">
  			</product-list>
  			</div>`
  })

  export class InventoryApp{
 
	product:Product[];
	constructor()
	{
	this.product=[new Product(
							 'MYSHOES',
							 'Black Running Shoes',
							 '/resources/images/products/black-shoes.jpg',
							 ['Men', 'Shoes', 'Running Shoes'],
							 109.99),
				new Product('NEATOJACKET',
							 'Blue Jacket',
							 '/resources/images/products/blue-jacket.jpg',
							 ['Women', 'Apparel', 'Jackets & Vests'],
							 238.99),
				new Product('NICEHAT',
							'A Nice Black Hat',
							'../product/resources/images/products/black-hat.jpg',
							['Men', 'Accessories', 'Hats'],
							 29.99)]
	}
	productWasSelected(product: Product): void {
     console.log('Product clicked: ', product);
     }

  }