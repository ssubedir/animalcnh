import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/oauth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
    if(this.auth.IsAuthenticated()){
      this.router.navigate(['/', 'acnh']);
    }
  }

  login(){
    this.router.navigate(['/', 'acnh']);
  }
}
