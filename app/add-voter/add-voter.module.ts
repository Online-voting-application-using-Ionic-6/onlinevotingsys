import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVoterPageRoutingModule } from './add-voter-routing.module';

import { AddVoterPage } from './add-voter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVoterPageRoutingModule
  ],
  declarations: [AddVoterPage]
})
export class AddVoterPageModule {}
