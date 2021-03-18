import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sortbydob',
  templateUrl: './sortbydob.component.html',
  styleUrls: ['./sortbydob.component.css']
})
export class SortbydobComponent implements OnInit {

  sortuser:any[]=[];

  constructor(private service:UserServiceService, private routes:Router) { }

  ngOnInit(): void {
    this.GetUserByDob();
  }

  GetUserByDob(){
    this.service.getSortedDob().subscribe((response)=>{console.log(response);
    this.sortuser=(<any>response);
    }
    );
}

}

