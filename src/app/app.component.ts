import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Frontend';
  myPlan = {
    name: 'Free ceva',
    price: '$10',
    features: ['1 user', '5 projects', '5 GB storage'],
    buttonText: 'Sign up'
  };
}
