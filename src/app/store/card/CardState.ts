import {Card} from "../../model/Card";
import {LoadableState} from "../LoadableState";




export interface CardState {
  draftCard: LoadableState<Card>;
  activeCards: LoadableState<Card[]>;
}