import { Routes } from "@angular/router";
import { ProductsListComponent } from "./pages/products-list/products-list.component";
import { ProductsDetailComponent } from "./pages/products-detail/products-detail.component";

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductsListComponent, },
  { path: ':id', component: ProductsDetailComponent }
]
