import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/oauth/auth.service';

@Component({
  selector: 'app-acnh-layout',
  templateUrl: './acnh-layout.component.html',
  styleUrls: ['./acnh-layout.component.scss']
})
export class AcnhLayoutComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  
  }
  
  // Logout(){
  //   console.log("Click logout")
  //   this.auth.Logout();
  // }

}
