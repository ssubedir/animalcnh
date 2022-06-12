import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig } from './config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly oauth:OAuthService) { }

  Login(){
    this.oauth.configure(authCodeFlowConfig);
    this.oauth.tokenValidationHandler = new JwksValidationHandler();
    this.oauth.loadDiscoveryDocument().then(()=>{
      this.oauth.tryLoginCodeFlow().then( ()=>{
        if(!this.oauth.hasValidAccessToken()){
          this.oauth.initCodeFlow();
        } else{
          localStorage.setItem("access_token",this.oauth.getAccessToken())
          this.oauth.loadUserProfile().then( (user) =>{
            localStorage.setItem("id_token",JSON.stringify(user))
          });
        }
      })
    })
  }

  IsAuthenticated(){
    if(this.oauth.hasValidAccessToken()){
      return true;
    } 
    return false;
  }

  Logout(){
    console.log("logout in service")
    this.oauth.revokeTokenAndLogout()
    this.oauth.logOut();
  }
}