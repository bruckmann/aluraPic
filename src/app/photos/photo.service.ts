import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'http://localhost:3000/'


@Injectable({
  providedIn: 'root'
})
export class PhotoService {


  constructor(private http: HttpClient) { }

  listFromUser(userName) {
    return this.http.get<Object[]>(API + `${userName}/photos`)	
  }
  
}
