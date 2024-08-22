import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    loginForm: FormGroup;

    public constructor(private loginService: LoginService,private fb: FormBuilder,private router: Router,){

        this.loginForm = fb.group({
            'username' : [null, Validators.required],
            'password': [null, Validators.required],
        });
    }

    login(form:any){

        if(form.valid){
            this.loginService.login(form.value)
            .subscribe(login=> {
                
                var loginJson = JSON.parse(JSON.stringify(login))
                localStorage.setItem('token',loginJson.access);
                this.router.navigate(['/']);
            },(error)=>{
                console.log('no login');
            })
        }else{

        }
    }
}
