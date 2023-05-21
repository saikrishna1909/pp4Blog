import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{
  blogs:{id:number,title:string,content:string}[]
  ngOnInit(): void {
    fetch('http://localhost:3000/blogs')
    .then((response) => response.json())
    .then((json) => this.blogs=json );
     }
  }


