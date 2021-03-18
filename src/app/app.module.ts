import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponentComponent } from './user-home-component/user-home-component.component';
import { UserAddComponentComponent } from './user-add-component/user-add-component.component';
import { UserUpdateComponentComponent } from './user-update-component/user-update-component.component';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './user-service.service';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SortbydobComponent } from './sortbydob/sortbydob.component';
import { SortbyjoiningdateComponent } from './sortbyjoiningdate/sortbyjoiningdate.component';
import { UserfilterPipe } from './userfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponentComponent,
    UserAddComponentComponent,
    UserUpdateComponentComponent,
    NotFoundComponent,
    UserheaderComponent,
    SortbydobComponent,
    SortbyjoiningdateComponent,
    UserfilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
