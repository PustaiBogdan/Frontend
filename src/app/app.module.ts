// // src/app/store/store.module.ts
// import { NgModule } from '@angular/core';
// import { StoreModule } from '@ngrx/store';
// import { appReducers, REDUCERS_TOKEN } from './store/app.store';
// import { EffectsModule } from '@ngrx/effects';
// import { CardsEffects } from './store/card/CardEffects'; // Asumând că ai efecte definite pentru cards
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { AppComponent } from './app.component';


// @NgModule({
//     declarations: [ 
//       // Include toate componentele pe care le ai
//       AppComponent
//     ],

//     imports: [
//       BrowserModule,
//       BrowserAnimationsModule,
//       HttpClientModule,
//       StoreModule.forRoot({ cardsState: appReducers().cardsState }, { metaReducers: [] }),
//       EffectsModule.forRoot([CardsEffects]),
//       // Include orice alte module necesare aici
//     ],
//     providers: [
//       // Include orice providers necesari
//     ],
//     bootstrap: [AppComponent]
//   })
//   export class AppModule {}