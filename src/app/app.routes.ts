import { Routes } from '@angular/router';

export const routes: Routes = [
  // Rutas para el auth y dentro las hijas, como register, login
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES),
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes').then(m => m.PRODUCT_ROUTES),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // Ruta para el 404 not found
  {
    path: '**',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];
