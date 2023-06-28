import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComputerDetailsPageRoutingModule } from './computer-details-routing.module';

import { ComputerDetailsPage } from './computer-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComputerDetailsPageRoutingModule
  ],
  declarations: [ComputerDetailsPage]
})
export class ComputerDetailsPageModule {}
