import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class CatServiceService {
res!:any;
  constructor(public http : HttpClient) { }

  call(){
     this.http.get("https://freetestapi.com/api/v1/cats/1").subscribe(response=>{
      console.log(response,"actual");
      this.res=response;
      // console.log(this.res,"assigned");
      return this.res;
    });

  }
}
