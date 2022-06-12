import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcnhRoutingModule } from './acnh-routing.module';
import { AcnhComponent } from './acnh/acnh.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AcnhComponent
  ],
  imports: [
    CommonModule,
    AcnhRoutingModule,
    MatButtonModule
  ]
})
export class AcnhModule { }
