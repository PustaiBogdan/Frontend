import { Injectable } from "@angular/core";
import { ApiClient } from "../dal/ApiClient";
import { Card } from "../model/Card";

@Injectable({
  providedIn: "root"
})
export class PricingCardManager {
    constructor(private apiService: ApiClient) {

    }

      public async requestCardsInfo(): Promise<Card[]> {


        const response = await this.apiService.getRequest('priceCards');
        return Card.prototype.fromJson(response);
      }

      public async requestCardsInfoReverse(): Promise<Card[]> {
        const response = await this.apiService.getRequest('priceCards');
        const rez = [...response].reverse();
        return Card.prototype.fromJson(rez);
      }


      public updateCard(card: Card): Promise<Card> {
        // Here we'll use a hypothetical PUT request. Adjust as necessary for your API.
        return this.apiService.postRequest(`priceCards/${card.id}`, card.toJson());
    }


}