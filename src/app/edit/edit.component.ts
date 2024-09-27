import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://dummyjson.com/posts/${postId}`).subscribe(data => {
      this.post = data;
    });
  }

  onUpdate() {
    this.http.put(`https://dummyjson.com/posts/${this.post.id}`, this.post).subscribe(() => {
      alert('Post updated');
    });
  }
}
