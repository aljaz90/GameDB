import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomovComponent } from './content/domov/domov.component';
import { PodstranComponent } from './content/podstran/podstran.component';
import { SearchComponent } from './content/search/search.component';
import { GamedetailsComponent } from './content/gamedetails/gamedetails.component'


const routes: Routes = [
  {
    path: 'domov',
    component: DomovComponent
  },
  {
    path: 'podstran',
    component: PodstranComponent
  },
  {
    path: '',
    redirectTo: 'domov',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'game/:id',
    component: GamedetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
