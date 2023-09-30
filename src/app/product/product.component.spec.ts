import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponentComponent } from './product.component';
describe('ProductComponentComponent', () => {
  let component: ProductComponentComponent;
  let fixture: ComponentFixture<ProductComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponentComponent]
    });
    fixture = TestBed.createComponent(ProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent {
  products: any[]; 

  constructor() {
    
    this.products = [
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 19.99 },
      { id: 3, name: 'Product 3', price: 7.49 }

    ];
  }


}

