import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ]
  },
];

export const AuthRoutes = RouterModule.forChild(routes);
