import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-pricing-card',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './pricing-card.component.html',
    styleUrl: './pricing-card.component.scss'
})
export class PricingComponent {
  @Input() plan: any; // Plan should have 'name', 'price', 'features', and 'buttonText'
  @Input() columnSize: string = 'col-sm-12 mb-3 mb-md-0'; // Default column size
}
