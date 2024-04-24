import { Routes } from "@angular/router";
import DashboardComponent from "./dashboard/dashboard.component";

export const ADMIN_ROUTES: Routes = [

  {
    path: '', component: DashboardComponent, children: [
      {
        path: 'users',
        title: 'Usuarios',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'productos',
        title: 'Productos',
        loadComponent: () => import('./dashboard/pages/users/users.component')
      },
      { path: '', redirectTo: 'users', pathMatch: 'full' }
    ]
  }
]
