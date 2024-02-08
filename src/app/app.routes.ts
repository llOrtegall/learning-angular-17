import { ProductsComponent } from "./features/products/products.component";
import { CartComponent } from "./features/cart/cart.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  // { path: '', redirectTo: '/products', pathMatch: 'full' }
]