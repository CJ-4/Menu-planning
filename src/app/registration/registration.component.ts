import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    FullName: new FormControl('',[Validators.required]),
    UserName: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required]),
    RePass:  new FormControl('',[Validators.required])
  })

  constructor() { }
 
  submit(){
    console.log(this.registrationForm.value);
  }
  
  ngOnInit() {
  }

  


}




