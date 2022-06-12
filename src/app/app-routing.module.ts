import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcnhLayoutComponent } from './core/acnh-layout/acnh-layout.component';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import { AuthGuardService } from './oauth/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    component:AuthLayoutComponent,
    children:[
      {
        path:'',
        redirectTo: '/auth',
        pathMatch:'full',
      },
      {
        path:'auth',canActivate: [],
        loadChildren: (): any => import('../app/auth/auth.module').then((m) => m.AuthModule),
      }
    ]
  },
  {
    path:'',
    component:AcnhLayoutComponent,
    children:[
      {
        path:'',
        redirectTo: '/acnh',
        pathMatch:'full',
      },
      {
        path:'acnh',canActivate: [],
        loadChildren: (): any => import('../app/acnh/acnh.module').then((m) => m.AcnhModule),
      }
    ]
  },
  { 
    path: "**",
    redirectTo:""
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
