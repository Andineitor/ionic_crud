import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComputerListPageRoutingModule } from './computer-list-routing.module';

import { ComputerListPage } from './computer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComputerListPageRoutingModule
  ],
  declarations: [ComputerListPage]
})
export class ComputerListPageModule {}
