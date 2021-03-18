import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SortbydobComponent } from './sortbydob/sortbydob.component';
import { SortbyjoiningdateComponent } from './sortbyjoiningdate/sortbyjoiningdate.component';
import { UserAddComponentComponent } from './user-add-component/user-add-component.component';
import { UserHomeComponentComponent } from './user-home-component/user-home-component.component';
import { UserUpdateComponentComponent } from './user-update-component/user-update-component.component';

const routes: Routes = [

  {
    path:'',
    component:UserHomeComponentComponent
  },

  {
    path:'myaddUser',
    component:UserAddComponentComponent
  },
  {
    path:'myupdateUser',
    component:UserUpdateComponentComponent
  },
  {
    path:'mydob',
    component:SortbydobComponent
  },
  {
    path:'myjoiningdate',
    component:SortbyjoiningdateComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
