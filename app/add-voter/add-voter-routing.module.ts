import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVoterPage } from './add-voter.page';

const routes: Routes = [
  {
    path: '',
    component: AddVoterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVoterPageRoutingModule {}
