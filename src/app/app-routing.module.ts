import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


//
import { ComputerListPage } from './computer-list/computer-list.page';
import { ComputerDetailsPage } from './computer-details/computer-details.page';

const routes: Routes = [
  { path: '', redirectTo: 'computers', pathMatch: 'full' },
  { path: 'computers', component: ComputerListPage },
  { path: 'computers/:id', component: ComputerDetailsPage },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'computer-list',
    loadChildren: () => import('./computer-list/computer-list.module').then( m => m.ComputerListPageModule)
  },
  {
    path: 'computer-details',
    loadChildren: () => import('./computer-details/computer-details.module').then( m => m.ComputerDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
