
import { createReducer, on } from '@ngrx/store';
import { CardActions } from './CardActions';
import { CardState } from './CardState';
import { LoadableState } from '../LoadableState';
import { Card } from '../../model/Card';
import { ApiError } from '../ApiError';

export const initialCardState: CardState = {
    draftCard: new LoadableState<Card>(undefined, false, undefined),
    activeCards: new LoadableState<Card[]>([], false, undefined)  // Asigură-te că acest câmp este inițializat corespunzător
};

export const cardReducer = createReducer(
    initialCardState,
    on(CardActions.fetchCards, (state) => ({
      ...state,
      activeCards: new LoadableState([], true, undefined)  // Set loading true, data empty
    })),
    on(CardActions.fetchCardsReverse, (state) => ({
        ...state,
        activeCards: new LoadableState([], true, undefined)  // Set loading true, data empty
    })),
    on(CardActions.fetchCardsSuccess, (state, { cards }) => ({
        ...state,
        activeCards: new LoadableState(cards, false, undefined)
    })),
    on(CardActions.fetchCardsFailure, (state, { error }) => ({
        ...state,
        activeCards: new LoadableState([], false, error)
    })),
    // Alte cazuri pentru modificarea stării
);
