import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig } from './config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly oauth:OAuthService,private router: Router) {
    this.oauth.configure(authCodeFlowConfig);
    this.oauth.tokenValidationHandler = new JwksValidationHandler();
   }

  Token(){
    this.oauth.loadDiscoveryDocument().then(()=>{
      this.oauth.tryLoginCodeFlow().then( ()=>{
        if(!this.oauth.hasValidAccessToken()){
          this.oauth.initCodeFlow();
        } else{
          this.router.navigate(['/', 'acnh']);
        }
      })
    })
  }

  Login(){
    this.oauth.configure(authCodeFlowConfig);
    this.oauth.tokenValidationHandler = new JwksValidationHandler();
    this.oauth.loadDiscoveryDocument().then(()=>{
      this.oauth.tryLoginCodeFlow().then( ()=>{
        this.oauth.loadUserProfile().then( (user) =>{
          console.log(user);
        });
        this.router.navigate(['/', 'acnh']);
      })
    })
  }

  IsAuthenticated(){
    if(this.oauth.hasValidAccessToken() && this.oauth.hasValidIdToken()){
      return true;
    } 
    return false;
  }

  Logout(){
    this.oauth.revokeTokenAndLogout().finally(
      ()=>{
        this.router.navigate(['/', 'auth']);
      }
    )
  }
}