import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url:string="http://localhost:8099";

  constructor(private http1:HttpClient) { }

 getAllUser(){
   return (this.http1.get(this.url+"/showalluser"));
 }

 addUser(obj: any){
return (this.http1.post(this.url+"/registerUser",obj));
 }

 updateUser(obj4:any){
    return (this.http1.put(this.url+"/updateuser/"+obj4.uid,obj4));
  }

onSortJD(){
  return (this.http1.get(this.url+"/sortjoiningdate"));
}

deleteUser(id:number){
  return (this.http1.delete(this.url+"/deletebyid/"+id));
}

getSortedDob(){
return (this.http1.get(this.url+"/sortBydob"));
}

getSortedJd(){
  return (this.http1.get(this.url+"/sortByJoiningdate"));
  }

}
