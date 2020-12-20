import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  UserId:string;
  showerror:boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.UserId="";
    this.showerror=false;
  }
  
  ValidateAndNavigateToOTP()
  {
    var response="9561294099";
    if(this.UserId==response)
    {
      this.router.navigate(["enterotp"]);
    }
    else
    {
      this.showerror=true;
    }
  }
}
