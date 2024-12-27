
// src/app/components/testing-route.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card } from '../../model/Card';
import { LoadableState } from '../../store/LoadableState';
import { IAppState } from '../../store/app.store';
import { CardActions } from '../../store/card/CardActions';
import { CommonModule } from '@angular/common';
import { getActiveCards } from '../../store/card/CardSelectors';

@Component({
    selector: 'app-testing-route',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './testing-route.component.html',
    styleUrls: ['./testing-route.component.scss']
})
// export class TestingRouteComponent implements OnInit {
  export class TestingRouteComponent {
  cards$: Observable<LoadableState<Card[]>>;
  columnSize: String = 'col-sm-12 col-md-6';
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.cards$ = this.store.select(getActiveCards); 
    this.store.dispatch(CardActions.fetchCards());
  }

  onFetchCards(): void {
    console.log(' 55 ');
    this.store.dispatch(CardActions.fetchCardsReverse());
  }
}


