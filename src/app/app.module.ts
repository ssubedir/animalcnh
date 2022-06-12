import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcnhLayoutComponent } from './core/acnh-layout/acnh-layout.component'; 
import { AcnhModule } from './acnh/acnh.module';
import { AuthGuardService } from './oauth/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { MatButtonModule } from '@angular/material/button';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    AcnhLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
    AcnhModule,
    MatButtonModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
