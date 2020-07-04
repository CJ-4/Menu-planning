import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    rePass:  new FormControl('',[Validators.required])
  })

  constructor() { }
 
  submit(){
    console.log(this.registrationForm.value);
    this.submitUser(this.registrationForm.value);
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




