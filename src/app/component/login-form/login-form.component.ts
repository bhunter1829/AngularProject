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

  submit():void{
   // this.authService.login(this.username, this.password);
    this.currentUser = this.authService.user;
    this.authService.login(this.username,this.password);
    let user : User={username:this.username, password:this.password};
    this.authService.login(user).subscribe(json=> {this.username = json;})
    // let promise = new Promise((resolve, reject) => {
    //   reject('Promise rejected!')
    // });
    
    // promise.catch(error => console.log(error));
    // promise.catch(error => console.log(error));
  }

  constructor(private authService : AuthService){}
  ngOnInit(): void {
      

  }
}
