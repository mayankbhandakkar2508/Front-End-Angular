import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sortbyjoiningdate',
  templateUrl: './sortbyjoiningdate.component.html',
  styleUrls: ['./sortbyjoiningdate.component.css']
})
export class SortbyjoiningdateComponent implements OnInit {

  sortJoiningDate:any[]=[];

  constructor(private service:UserServiceService, private routes:Router) { }

  ngOnInit(): void {
    this.GetUserByJoiningDate();
  }

  GetUserByJoiningDate(){
    this.service.getSortedJd().subscribe((response)=>{console.log(response);
      this.sortJoiningDate=(<any>response);
      });
  }

}
