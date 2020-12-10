import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'evenement-modal',
    loadChildren: () => import('./evenement-modal/evenement-modal.module').then( m => m.EvenementModalPageModule)
  },
  {
    path: 'profile-modal',
    loadChildren: () => import('./profile-modal/profile-modal.module').then( m => m.ProfileModalPageModule)
  },
  {
    path: 'abonnements-modal',
    loadChildren: () => import('./abonnements-modal/abonnements-modal.module').then( m => m.AbonnementsModalPageModule)
  },
  {
    path: 'event-creation-modal',
    loadChildren: () => import('./event-creation-modal/event-creation-modal.module').then( m => m.EventCreationModalPageModule)
  },
  {
    path: 'filtrer-modal',
    loadChildren: () => import('./filtrer-modal/filtrer-modal.module').then( m => m.FiltrerModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
