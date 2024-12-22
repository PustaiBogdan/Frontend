import { Component } from '@angular/core';
import { PricingCardManager } from '../../bll/PricingCardManagement';
import { PricingComponent } from '../pricing-card/pricing-card.component';
import { Card } from '../../model/Card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-testing-route',
  standalone: true,
  imports: [PricingComponent,CommonModule],
  templateUrl: './testing-route.component.html',
  styleUrl: './testing-route.component.scss'
})
export class TestingRouteComponent {
  cards: Card[] = [];
  columnSize: String = 'col-sm-12 col-md-6';
  constructor(
    private pricingCardManager: PricingCardManager
  ){}


  ngOnInit(): void {
    console.log(' fff ');

    this.fetchCardsInfo();
  }

  async fetchCardsInfo(): Promise<void> {
    try {
      console.log(' 423232s3 ');
      this.cards = await this.pricingCardManager.requestCardsInfo()
      console.log(this.cards);
    } catch (e) {
      console.log(' 404 ');
    }
  }

}
