import { Component, Inject } from '@angular/core';
import { HomeService } from './home.service';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    title = 'Guest';
    agents:any = [];
    user:any = [];
    public constructor(private homeService: HomeService,@Inject(DOCUMENT) private document: Document){

        const localStorage = document.defaultView?.localStorage;

        this.homeService.getAllAgents()
        .subscribe((agents)=> {
            console.log(agents);
            if(agents){
                this.agents = agents;
            }else{
                this.agents = [];
            }
        },(error)=>{
            console.log('agents error');
        });

        if (localStorage) {
            let _user_ = localStorage.getItem('token');
            if( _user_ != null) {
                this.getUserDetails();
            }
        }
    }

    getUserDetails(){

        this.homeService.getUserDetails()
        .subscribe((user)=> {
            
            this.user = user;
        },(error)=>{
            localStorage.removeItem('token');
            this.user = [];
            console.log('agents error');
        });
        
        console.log('call user')
    }
}