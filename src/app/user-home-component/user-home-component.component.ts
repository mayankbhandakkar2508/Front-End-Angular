import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-home-component',
  templateUrl: './user-home-component.component.html',
  styleUrls: ['./user-home-component.component.css']
})
export class UserHomeComponentComponent implements OnInit {

  posts:any[]=[];
  nameSearch:string='';
  isRadioClick:any;
  
  UID:any;
  FIRSTNAME:string='';
  LASTNAME:string='';
  EMAIL:string='';
  PINCODE:string='';
  PHNO:string='';
  STATUS:string='';
  DOB:string='';
  JOININGDATE:string='';

  constructor(private service:UserServiceService, private routes:Router) { }

  ngOnInit(): void {
    this.GetAllUserWithoutReload();
  }

  GetAllUserWithoutReload(){
    this.service.getAllUser().subscribe((response)=>{console.log(response);
    this.posts=(<any>response);
    }
    );
}

radioButtonValidation(){
  if(this.isRadioClick==null){
    alert("Please Select User...");
    return false;
  }
  else{
    console.log("ok Selected "+this.isRadioClick);
    return true;
  }
}

onRadioClick(item:any){
  console.log(item);

  this.UID=item.uid;
  this.FIRSTNAME=item.firstname;
  this.LASTNAME=item.lastname;
  this.EMAIL=item.email;
  this.PINCODE=item.pincode;
  this.PHNO=item.phno;
  this.STATUS=item.status;
  this.DOB=item.dob;
  this.JOININGDATE=item.joiningdate

  this.isRadioClick=item.uid;
}

onAddUser(){
  this.routes.navigate(['/myaddUser']);
}

onDeleteUser(){
  if(this.radioButtonValidation()){
    console.log("radio button is checked..");
  this.service.deleteUser(this.isRadioClick).subscribe((response)=>{
    console.log(response)
    this.GetAllUserWithoutReload();
  })
}else{
console.log("Radio Button is Uncheck..");
  }
  }

 onUpdateuser(){
if(this.radioButtonValidation()){

  let myobj={
    uid:this.UID,
    firstname:this.FIRSTNAME,
    lastname:this.LASTNAME,
    email:this.EMAIL,
    pincode:this.PINCODE,
    phno:this.PHNO,
    status:this.STATUS,
    dob:this.DOB,
    joiningdate:this.JOININGDATE
  }
  this.routes.navigate(['/myupdateUser'],{queryParams:myobj})
}else{
 console.log("something went wrong.....");
}

}

onSortDob(){
  this.routes.navigate(['/mydob']);
}

onSortJoiningDate(){
  this.routes.navigate(['/myjoiningdate']);
}

}
