import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterHomePageRoutingModule } from './voter-home-routing.module';

import { VoterHomePage } from './voter-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoterHomePageRoutingModule
  ],
  declarations: [VoterHomePage]
})
export class VoterHomePageModule {}
