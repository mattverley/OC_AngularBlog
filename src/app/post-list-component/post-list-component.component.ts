import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post/post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postCreatedAt: Date;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  postPopularity: string;

  constructor() {}
  ngOnInit() {}

  GetPopularity(loveIts: number) {
    if (loveIts > 0) {
      this.postPopularity = 'popular';
    } else if (loveIts < 0) {
      this.postPopularity = 'unpopular';
    } else if (loveIts === 0) {
      this.postPopularity = null;
    }
  }

  onAddLove() {
    this.postLoveIts++;
    this.GetPopularity(this.postLoveIts);
  }
  onRemoveLove() {
    this.postLoveIts--;
    this.GetPopularity(this.postLoveIts);
  }
}
