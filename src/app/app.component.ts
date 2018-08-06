import { Component } from '@angular/core';
import { Post } from './post/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oc-blog';

  Posts: Post[] = [
    new Post(
      'Mon premier post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum consequat nunc eu ultricies. Sed maximus sem.'
    ),
    new Post(
      'Mon deuxième post',
      'Curabitur sed ornare ex, id consectetur augue. Duis vitae metus a felis congue elementum. Sed ac odio dui id consectetur augue.'
    ),
    new Post(
      'Encore un post',
      'Nulla facilisi. Donec mollis magna nec convallis ullamcorper. Morbi fringilla, lectus in placerat sagittis curabitur magna.'
    )
  ];
}
