import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PricingComponent } from './presentationLayer/pricing-card/pricing-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PricingComponent],
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
