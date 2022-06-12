import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcnhComponent } from './acnh/acnh.component';

const routes: Routes = [
  {
    path: '',
    component: AcnhComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcnhRoutingModule { }
