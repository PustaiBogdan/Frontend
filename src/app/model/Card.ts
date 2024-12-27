import {NumberUtils} from '../utils/NumberUtils';
import {BaseModel} from './BaseModel';
import {StringUtils} from "../utils/StringUtils";

export class Card implements BaseModel<Card> {
  id: string;
  name: string;
  features: string[];
  price: string;
  phoneNumber: string;
  email: string;
  buttonText: string;

  constructor(
    id: string,
    name: string,
    features: string[],
    price: string,
    phoneNumber: string,
    email: string,
    buttonText: string

  ) {
    this.id = id;
    this.name = name;
    this.features = features;
    this.price = price;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.buttonText = buttonText;
  }

  fromJson(json: any[]): Card[] {
    if (!json) return [];
    return json.map(json => new Card(
      json.id || '',
      json.name || '',
      json.features || [],
      json.price || '',
      json.phoneNumber || '',
      json.email || '',
      json.buttonText || '',
    ));
  }

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      features: this.features,
      price: this.price,
      phoneNumber: this.phoneNumber,
      email: this.email,
      buttonText: this.buttonText

    };
  }

}
