
import {createAction, props} from "@ngrx/store";

import { Card } from "../../model/Card";
import { ApiError } from "../ApiError";
export class CardActions {
    static fetchCards = createAction('[Card] Fetch Cards');
    static fetchCardsReverse = createAction('[Card] Fetch Cards reverse');
    static fetchCardsSuccess = createAction('[Card] Fetch Cards Success', props<{ cards: Card[] }>());
    static fetchCardsFailure = createAction('[Card] Fetch Cards Failure', props<{ error: any }>());
}