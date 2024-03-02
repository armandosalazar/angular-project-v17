import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  public isLogged: boolean = false;
  public value: string = 'Value from PostComponent';
}
