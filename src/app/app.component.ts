import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by City">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'homes';
}
