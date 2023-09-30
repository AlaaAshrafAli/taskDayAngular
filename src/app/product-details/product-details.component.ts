import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number | undefined;
  product: any; // Define the product data structure

  constructor(
    private route: ActivatedRoute,
 
  ) {}

  ngOnInit() {
    // Get the product ID from the route parameters
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get;
      // Fetch the product details based on the ID

    });
  }
}
