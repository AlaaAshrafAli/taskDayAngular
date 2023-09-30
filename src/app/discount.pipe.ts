import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage: number): string {
    if (discountPercentage && discountPercentage > 0 && discountPercentage <= 100) {
      const discountedPrice = price - (price * (discountPercentage / 100));
      return `Before Discount: ${price.toFixed(2)} EGP, After Discount: ${discountedPrice.toFixed(2)} EGP`;
    } else {
      return `${price.toFixed(2)} EGP`;
    }
  }
}
