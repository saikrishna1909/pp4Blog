import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createblogs',
  templateUrl: './createblogs.component.html',
  styleUrls: ['./createblogs.component.css']
})
export class CreateblogsComponent {
  blog:{id:number,title:string,content:string}={
    id:null,
    title: '',
    content: ''
  };
status=false
  onPost(form:NgForm){
    this.blog.title=form.value.title;
    this.blog.content=form.value.content;

    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      body: JSON.stringify(this.blog),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json)
      this.status=true
      form.reset()
  }
}
