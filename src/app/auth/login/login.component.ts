import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/oauth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private auth:AuthService) { }

  ngOnInit(): void {

    if(this.auth.IsAuthenticated()){
      this.router.navigate(['/', 'acnh']);
    }

    this.route.queryParams.subscribe(async params => {      
      let code = params["code"];
      if(!!code){
        this.auth.Login();
        if(this.auth.IsAuthenticated()){
          this.router.navigate(['/', 'acnh']);
        }
      }
    });
    
  }

  login(){
    this.router.navigate(['/', 'acnh']);
  }
}
