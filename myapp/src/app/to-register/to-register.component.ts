import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-register',
  templateUrl: './to-register.component.html',
  styleUrls: ['./to-register.component.css']
})
export class ToRegisterComponent {
  user:{
    firstname:string,
    lastname:string,
    email:string,
    password:string
   }={
     firstname: '',
     lastname: '',
     email: '',
     password: ''
   }
    constructor(private services: ServicesService) {}
    status=false
    ngOnInit(): void {}
    onRegister(form: NgForm) {
        this.user.firstname=form.value.firstname
        this.user.lastname=form.value.lastname
        this.user.email=form.value.email
        this.user.password=form.value.password
        fetch('http://localhost:3000/user', {
        method: 'POST',
        body: JSON.stringify(this.user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => json)
        form.reset()
        this.status=true
    }
  
}
