import { InjectionToken } from "@angular/core";
import { CardState } from "./card/CardState";
import { ActionReducerMap } from "@ngrx/store";
import { cardReducer } from "./card/CardReducers";

export interface IAppState {
    cardsState: CardState;
    // alte state-uri
}
  
export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<IAppState>>('App Reducers Token');

export function appReducers(): ActionReducerMap<IAppState, any> {
    return {
      cardsState: cardReducer,
    };
  }
  