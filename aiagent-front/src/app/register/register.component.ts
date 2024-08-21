import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})

export class RegisterComponent {

    registerForm: FormGroup;

    public constructor(private fb: FormBuilder){

        this.registerForm = fb.group({
            'name' : [null, Validators.required],
            'username' : [null, Validators.required],
            'role' : ['customer', Validators.required],
            'email' : [null, Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            //'phone_number' : [null, Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
            'password': [null, Validators.required],
        });
    }

    submit(form:any){

        console.log(form.value)
    }
}