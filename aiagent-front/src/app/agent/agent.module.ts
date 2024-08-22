import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { AgentService } from './agent.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AgentComponent
    ],
    imports: [
        CommonModule,
        AgentRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        AgentService
    ]
})
export class AgentModule { }
