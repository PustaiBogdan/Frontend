import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
// import { StoreModule } from '@ngrx/store';

import { routes } from './routing/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore, StoreModule } from '@ngrx/store';
import { appReducers,REDUCERS_TOKEN } from './store/app.store';
import { cardReducer } from './store/card/CardReducers';
import { provideEffects } from '@ngrx/effects';
import { CardsEffects } from './store/card/CardEffects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({cardsState : cardReducer}),
    provideEffects([CardsEffects]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
