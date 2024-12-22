import { Injectable } from "@angular/core";
import { ApiClient } from "../dal/ApiClient";
import { Card } from "../model/Card";

@Injectable({
  providedIn: "root"
})
export class PricingCardManager {
    constructor(private apiService: ApiClient) {

    }

    // public async requestCardInfo(id: number): Promise<Card> {

    //     if (id === undefined) {
    //       return undefined;
    //     }
    
    //     const response = await this.apiService.getRequest('priceCards', {
    //         id: id
    //     });
    
    //     return Card.prototype.fromJson(response.result);
    //   }

      public async requestCardsInfo(): Promise<Card[]> {


        const response = await this.apiService.getRequest('priceCards');
      console.log("Response from API:", response);

        return Card.prototype.fromJson(response);
      }


}