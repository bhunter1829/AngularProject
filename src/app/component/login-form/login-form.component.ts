import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  username :string ="";
  password : string = "";
  currentUser : User = this.authService.user;

  submit(){

    // this.authService.login(this.username, this.password).subscribe(json =>{this.authService.user=json; this.currentUser=json})

  }

  constructor(private authService : AuthService){}
  ngOnInit(): void {
      

  }
}
