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
    console.log(this.loginForm.value);
  }
  
  ngOnInit() {
  }

  


}
