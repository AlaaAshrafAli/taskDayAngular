import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
someVariable: any;
addToCart() {
throw new Error('Method not implemented.');
}
  @Input() product: any; 

  constructor(private router: Router) {}

  navigateToProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
