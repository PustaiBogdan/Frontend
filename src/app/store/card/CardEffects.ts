
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../app.store";
import { CardActions } from "./CardActions";
import { catchError, from, map, of, switchMap } from "rxjs";
import { PricingCardManager } from "../../bll/PricingCardManagement";



@Injectable()
export class CardsEffects {

  fetchCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.fetchCards, CardActions.fetchCardsReverse), // Ascultă pentru ambele acțiuni
      switchMap((action) => {
        const fetchObservable = action.type === CardActions.fetchCards.type
          ? from(this.cardManager.requestCardsInfo())
          : from(this.cardManager.requestCardsInfo().then(cards => cards.reverse()));

        return fetchObservable.pipe(
          map(cards => CardActions.fetchCardsSuccess({ cards })),
          catchError(error => of(CardActions.fetchCardsFailure({ error })))
        );
      })
    )
  );
  

    constructor(
        private actions$: Actions,
        private store: Store<IAppState>,
        private cardManager: PricingCardManager) {
    }
}

