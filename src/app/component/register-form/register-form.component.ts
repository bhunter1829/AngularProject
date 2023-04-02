import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  username: string = "";
  password : string = "";
  currentUser : User = this.authService.user;
  successMessage : string ="";
  erorrMessage : string = "";
  ngOnInit(): void {
  }
  constructor(private authService : AuthService){}


  submit_register(){
  
    if(this.username.length>=5 && this.password.length>=8){
      this.authService.register(this.username,this.password).subscribe({
        next: (json) => {
          this.successMessage = "registered Complete welcome " +json.username;
          this.erorrMessage = "";

      },
      error: (jsonError) =>{
        this.erorrMessage = "failed to register username already exists ";
        this.successMessage = "";
      }
    });
  }
  else{
    this.erorrMessage = "Please make the username 5 characters or numberers long, and the password 8 characters or numbers longer";
    this.successMessage="";
  }
  }
}

// extra commit