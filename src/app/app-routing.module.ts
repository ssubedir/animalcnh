import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcnhLayoutComponent } from './core/acnh-layout/acnh-layout.component';
import { HomeLayoutComponent } from './core/home-layout/home-layout.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuardService } from './oauth/auth-guard.service';

const routes: Routes = [
  {
    path:'acnh',
    component:AcnhLayoutComponent,
    children:[
      {
        path:'',canActivate: [AuthGuardService],
        loadChildren: (): any => import('../app/acnh/acnh.module').then((m) => m.AcnhModule),
      }
    ]
  },
  {
    path:'',
    component: HomeLayoutComponent,
    children:[
      {
        path:'',
        component: HomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
