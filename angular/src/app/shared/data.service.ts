import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {}

  getdata(){
    return this.http.get("/list")
  }
}
