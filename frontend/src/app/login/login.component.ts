import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    UserName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  constructor() { }
 
  submit(){
    this.submitUser(this.loginForm.value);
  }
  
  ngOnInit() {
  }

  submitUser(data){
    fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify(data),
      })
      .then(response => {
        if (response.status == 200) {
          window.location.replace('../home');
        }
      });
  }
}

