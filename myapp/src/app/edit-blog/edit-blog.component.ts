import { Component } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent {

  blog:{
    id:number,
    title:string,
    content:string

  }={
    id: 0,
    title: '',
    content: ''
  }

  content:string
  constructor(private route: ActivatedRoute) {}
  ngOnInit(){
    this.route.queryParams.subscribe((params) => {
      this.blog.id = params['id'];
      this.blog.title=params['title'];
      this.blog.content=params['content'];
      console.log(this.blog.content);
      this.content=this.blog.content;
    });
  }
  editForm=new FormGroup({
    title:new FormControl(this.blog.title),
    content:new FormControl(this.blog.content)

  });
  status=false;
onSave(){
      console.log(this.blog.id)
      this.blog.title=this.editForm.value.title;
      this.blog.content=this.editForm.value.content;
      fetch('http://localhost:3000/blogs/'+this.blog.id, {
      method: 'PUT',
      body: JSON.stringify(this.blog),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json)
      this.status=true

}
}
