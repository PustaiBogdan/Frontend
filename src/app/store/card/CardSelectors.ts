import { createSelector } from "@ngrx/store";
import { IAppState } from "../app.store";
import { CardState } from "./CardState";

const getCardsState = (state : IAppState) => state.cardsState;

export const getDraftCard = createSelector(
    getCardsState,
    (state: CardState) => state?.draftCard
);
export const getActiveCards = createSelector(
    getCardsState,
    (state: CardState) => state?.activeCards
);