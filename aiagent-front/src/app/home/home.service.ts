import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HomeService {

	headers: any;
	option: any;
	apiurl: string = 'http://127.0.0.1:8000/';
	constructor(private http: HttpClient) {

		/*let header = new HttpHeaders();
		this.headers = header.set('Authorization',localStorage.getItem('token')).set('Accept','application/json'); 
		this.option = this.headers;*/
	}

	getAllAgents() {
		let options = this.headers;
		return this.http.get(this.apiurl + 'agent/public/agent/');
	}
}