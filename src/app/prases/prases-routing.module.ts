import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CanDeactivateGuard } from '../shared/can-deactivate.guard';
import { PhraseDetailsResolver } from '../shared/phrase-details.resolver';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';
import { PhrasesListComponent } from './phrases-list/phrases-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/prases', pathMatch: 'full' },
  {
    path: 'phrases',
    component: PhraseHomeComponent,
    children: [
      {
        path: '',
        component: PhrasesListComponent,
        children: [
          {
            path: ':id',
            component: PhraseDetailsComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              phrase: PhraseDetailsResolver
            }
          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrasesRoutingModule { }
