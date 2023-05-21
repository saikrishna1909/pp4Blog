import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private route: Router) {}
  topic:string='admin';
  value:any;
 status:boolean=true;
 userstatus:boolean=false;
  ngOnInit(): void {
    this.route.events.subscribe(    
      (val)=>{
        console.log("heer")
        if(val instanceof NavigationEnd){
            if(val.url=='/ulogin'||val.url==''||val.url=='/app'){

              this.status=true;
              console.log(this.status)
            }else{
              this.status=false
            }
           
        }
      }
    )
  }
}
