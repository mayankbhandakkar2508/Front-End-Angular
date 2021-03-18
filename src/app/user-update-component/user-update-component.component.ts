import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-update-component',
  templateUrl: './user-update-component.component.html',
  styleUrls: ['./user-update-component.component.css']
})
export class UserUpdateComponentComponent implements OnInit {

posts:any[]=[];
myobj={};
myobj2={};

  UID:any;
  FIRSTNAME:any;
  LASTNAME:any;
  EMAIL:any;
  PINCODE:any;
  PHNO:any;
  STATUS:any;
  DOB:any;
  JOININGDATE:any;

  constructor(private service:UserServiceService, private routes:Router,private router:ActivatedRoute) { }

  ngOnInit(): void{
    this.GetAllUserWithoutReload();
   this.router.queryParamMap.subscribe((query)=>{
   this.UID=query.get('uid');
 this.FIRSTNAME=query.get('firstname');
 this.LASTNAME=query.get('lastname');
 this.EMAIL=query.get('email');
this.PINCODE=query.get('pincode');
this.PHNO=query.get('phno');
this.STATUS=query.get('status');
this.DOB=query.get('dob');
this.JOININGDATE=query.get('joiningdate');
})
    
  }


  GetAllUserWithoutReload() {
    this.service.getAllUser().subscribe((response)=>{
      console.log(response);
      this.posts=(<any>response);
    })
  }

  onFinalUpdate(){
    this.routes.navigate(['/'])
    let obj4={
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

    this.service.updateUser(obj4).subscribe((response)=>{
      console.log("Successfully updated");
      this.GetAllUserWithoutReload();
    })
  }

}
