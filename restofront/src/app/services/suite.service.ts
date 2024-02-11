import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SuiteService {

 
  constructor( private http: HttpClient) { }
  private url ='http://127.0.0.1:5001/suite/';




  }

 


