import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input('blog')
  blog:{
    id:number
    title:string,
    content:string
  }
  constructor(private dialogue:MatDialog){

  }
  status=false
  onDelete(){
    fetch('http://localhost:3000/blogs/'+this.blog.id, {
      method: 'DELETE',
    
      })
      this.status=true
  }
  
}
