import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouteUrls } from 'src/app/core/models/enums/route-urls.enum';
import { PostI } from 'src/app/core/models/post.interface';
import { PostService } from 'src/app/services/post.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    private seoService: SeoService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
  }

  handleSave(post: PostI) {
    this.postService.createPost(post);
    // this.router.navigate([RouteUrls.blog]); // no hace falta pq es un modal, seria cerrarlo

  }



}
