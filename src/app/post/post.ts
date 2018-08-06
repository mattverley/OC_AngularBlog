export class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(t: string, c: string) {
    this.title = t;
    this.content = c;
    this.created_at = new Date();
    this.loveIts = 0;
  }
}
