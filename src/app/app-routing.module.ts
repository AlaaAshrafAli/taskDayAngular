import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './product/product.component.spec';
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, 
  { path: 'products', component: ProductsComponent},
  { path: 'product/:id', component: ProductDetailsComponent }, 
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }, 
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }