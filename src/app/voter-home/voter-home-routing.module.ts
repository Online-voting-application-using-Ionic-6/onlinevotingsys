import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoterHomePage } from './voter-home.page';

const routes: Routes = [
  {
    path: '',
    component: VoterHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoterHomePageRoutingModule {}
