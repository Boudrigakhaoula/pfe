import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

  uploadImage(image:any){
    const formData = new FormData();
    formData.append('file',image);
    return this.http.post(environment.url + '/api/upload',formData) as Observable<any>;
  };

}
