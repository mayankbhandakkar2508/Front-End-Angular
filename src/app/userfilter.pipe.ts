import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.legth===0){
    return value;
  }

  let userarr:any[]=[];

 for(let i=0; i<value.length; i++){
  let firstname:string=value[i].firstname;
  let lastname:string=value[i].lastname
  let status:string=value[i].status;
  let pincode:string=value[i].pincode;
  
   if(firstname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
    userarr.push(value[i]);
  }else if(lastname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
    userarr.push(value[i]);
  }else if(status.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
    userarr.push(value[i]);
  }else if(pincode.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
userarr.push(value[i]);
  }
 }
 return userarr;

  }

}
