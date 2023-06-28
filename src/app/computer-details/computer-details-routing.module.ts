import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComputerDetailsPage } from './computer-details.page';

const routes: Routes = [
  {
    path: '',
    component: ComputerDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComputerDetailsPageRoutingModule {}
