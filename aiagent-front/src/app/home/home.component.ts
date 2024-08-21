import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    title = 'Guest';
    agents:any = [];
    public constructor(private homeService: HomeService){

        this.homeService.getAllAgents()
        .subscribe((agents)=> {
            console.log(agents);
            if(agents){
                console.log('agents');
                this.agents = agents;
            }else{
                console.log('1agents');
                this.agents = [];
            }
        },(error)=>{
            console.log('1agents');
        });
    }
}
