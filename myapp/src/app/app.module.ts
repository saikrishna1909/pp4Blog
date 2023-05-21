import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { UnavigationComponent } from './unavigation/unavigation.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CreateblogsComponent } from './createblogs/createblogs.component';
import { CardItemComponent } from './card-item/card-item.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ToRegisterComponent } from './to-register/to-register.component';

const appRoute:Routes=[
  {path:'',component:AppComponent},
  {path:'app',redirectTo:'',pathMatch:'full'},
  {path:'app',component:ToRegisterComponent},
  {path:'register/app',redirectTo:'',pathMatch:'full'},
  {path:'ulogin',component:UserComponent},
  
  {path:'ulogin/vblog',redirectTo:'vblog',pathMatch:'full'},
  {path:'register',component:ToRegisterComponent},
  {path:'ulogin/app',redirectTo:'',pathMatch:'full'},
  
  {path:'ulogin/userhome/payment/userhome',redirectTo:'userhome',pathMatch:'full'},
  {path:'userhome/payment/userhome',redirectTo:'userhome',pathMatch:'full'},
  {path:'vblog',component:BlogsComponent},
  {path:'vblog/cblog',component:CreateblogsComponent},
  {path:'vblog/cblog/vblog',redirectTo:'vblog',pathMatch:'full'},
  {path:'vblog/app',redirectTo:'',pathMatch:'full'},
  {path:'vblog/cblog/app',redirectTo:'',pathMatch:'full'},
  {path:'vblog/edit',component:EditBlogComponent},
  {path:'vblog/edit/cancel',redirectTo:'vblog',pathMatch:'full'},
  {path:'vblog/edit/saved',redirectTo:'vblog',pathMatch:'full'},
  {path:'vblog/vblog',redirectTo:'vblog',pathMatch:'full'},



  

]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,

    NavigationComponent,
    UnavigationComponent,

    BlogsComponent,
    CreateblogsComponent,
    CardItemComponent,
    EditBlogComponent,
    ToRegisterComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(appRoute),MatDialogModule,MatButtonModule,ReactiveFormsModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent],
  exports:[FormsModule]
})
export class AppModule { }
