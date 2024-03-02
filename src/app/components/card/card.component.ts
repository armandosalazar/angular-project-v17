import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <section>
      @for (item of items; track $index) {
        <article>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <p>{{ value }}</p>
        </article>
      }
    </section>
  `,
  styles: ``,
})
export class CardComponent {
  @Input() value: string = '';

  items: { title: string; description: string }[] = [
    {
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      title: 'Title 2',
      description: 'Description 2',
    },
    {
      title: 'Title 3',
      description: 'Description 3',
    },
  ];
}
