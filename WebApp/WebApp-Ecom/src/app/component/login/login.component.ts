import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
    this.InitailizeVariable()
    
  }

  InitailizeVariable()
  {
    this.username="";
    this.password="";
  }


  login()
  {
    this.username=this.password;
    this.accountService.get(this.username,this.password).subscribe((response)=>{
      if(response=="Login Successful")
      this.router.navigate(["dashboard"]);
    })
  }

  forgotPassword()
  {
     this.router.navigate(["forgotpassword"]);
  }
}
