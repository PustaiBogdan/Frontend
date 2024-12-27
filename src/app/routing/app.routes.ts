import { Routes } from '@angular/router';
import { AppRoutes } from '../model/enums/AppRoutes';
import { NotFoundComponent } from '../presentationLayer/not-found-page/not-found.component';
import { TestingRouteComponent } from '../presentationLayer/testing-route/testing-route.component';
import { PricingComponent } from '../presentationLayer/pricing-card/pricing-card.component';

export const routes: Routes = [
  {
    path: AppRoutes.root,
    redirectTo: AppRoutes.testingRoute,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.testingRoute,
    component: TestingRouteComponent,
  },
  {
    path: AppRoutes.componentPricingRoute,
    component: PricingComponent,
  },
  {
    path: AppRoutes.pageNotFound,
    component: NotFoundComponent,
  },
];
