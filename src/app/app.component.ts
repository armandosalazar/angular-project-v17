import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PostComponent } from './components/post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private num: number = 2;
  public title: string = `Noticia ${this.num}`;
}
