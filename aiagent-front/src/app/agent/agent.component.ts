import { Component } from '@angular/core';
import { AgentService } from './agent.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-agent',
    templateUrl: './agent.component.html',
    styleUrl: './agent.component.css'
})
export class AgentComponent {

    agentId = null;
    questions:any = [];
    form=new FormGroup({})
    aiResponse:any = null;
    public constructor(private agentService: AgentService,private activatedRoute: ActivatedRoute){
        
        this.activatedRoute.params.subscribe((params: Params) => {
            this.agentId = params['id'];
        });

        this.getAgentQuestion();
    }

    getAgentQuestion(){

        this.agentService.getAgentQuestion(this.agentId)
        .subscribe((questions)=> {
            
            this.questions = questions;

            this.questions.forEach( (x:any) =>{
                this.form.addControl(x.id,new FormControl('',Validators.required))
            });
        },(error)=>{
            this.questions = [];
            console.log('agents question error');
        });
        
        console.log('call user')
    }

    getAgentResponse(form:any){

        console.log(form.value)
        console.log(form.valid)

        let arr = [];
        for (var key in form.value) {
            arr.push({
                "question_id": +key,
                "answer":form.value[key]
            })
        }
        console.log(arr)
        if(form.valid){
            this.agentService.getAgentResponse(this.agentId,arr)
            .subscribe((questionsResponse)=> {
                
                this.aiResponse = questionsResponse;
            },(error)=>{
                this.aiResponse = null;
                console.log('agents question response error');
            });
        }
    }
}
