import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-add-component',
  templateUrl: './user-add-component.component.html',
  styleUrls: ['./user-add-component.component.css']
})
export class UserAddComponentComponent implements OnInit {

  constructor(private service:UserServiceService, private routes:Router) { }

  ngOnInit(): void {
  }

  onPostUser(myfname: any,mylname: any,myemail: any,mypincode: any,myphno: any,mystatus: any,mydob: any,myjoining: any){
let obj={
  firstname:myfname,
  lastname:mylname,
  email:myemail,
  pincode:mypincode,
  phno:myphno,
  status:mystatus,
  dob:mydob,
  joiningdate:myjoining
}
this.service.addUser(obj).subscribe((response)=>{
  console.log(<any>response);
  this.routes.navigate(['/']);
})
  }

}
