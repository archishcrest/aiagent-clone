import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AgentService {

	headers: any;
	option: any;
	apiurl: string = 'http://127.0.0.1:8000/';
	constructor(private http: HttpClient) {

		/*let header = new HttpHeaders();
		this.headers = header.set('Authorization',localStorage.getItem('token')).set('Accept','application/json'); 
		this.option = this.headers;*/
	}

	getAgentQuestion(id:any) {
		let options = {
	        headers: new HttpHeaders({ 
	        	'Accept': 'application/json' ,
	        	'Authorization': 'Bearer '+localStorage.getItem('token')
	        })
	    };
		return this.http.get(this.apiurl + 'agent/'+id+'/question/',options);
	}

	getAgentResponse(id:any,questions:any){

		let options = {
	        headers: new HttpHeaders({ 
	        	'Accept': 'application/json' ,
	        	'Authorization': 'Bearer '+localStorage.getItem('token')
	        }),
	    };

		return this.http.post(this.apiurl + 'agent/'+id+'/answer', questions, options);
	}
}