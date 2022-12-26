import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  email:String ="";
  password:any;
  constructor(private router: Router){

  }

  ngOnInit(): void {
  }

  login(){
    if(this.email == "admine@asd" && this.password=="12345"){
      this.router.navigateByUrl('/adminDashboard')
      console.log("welcome")
      alert("welcome");
  
    }
    else if(this.email =="" && this.password ==""){
      alert("enter proper email or password")
  
    }
  }

}
