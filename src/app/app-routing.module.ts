import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'vinho',
    loadChildren: () => import('./vinho/vinho.module').then( m => m.VinhoPageModule)
  },
  {
    path: 'vinho-form/:id',
    loadChildren: () => import('./vinho-form/vinho-form.module').then( m => m.VinhoFormPageModule)
  },  
  {
    path: 'tipo-vinho',
    loadChildren: () => import('./tipo-vinho/tipo-vinho.module').then( m => m.TipoVinhoPageModule)
  },
  {
    path: 'nacionalidade',
    loadChildren: () => import('./nacionalidade/nacionalidade.module').then( m => m.NacionalidadePageModule)
  },
  {
    path: 'uva',
    loadChildren: () => import('./uva/uva.module').then( m => m.UvaPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'busca',
    loadChildren: () => import('./busca/busca.module').then( m => m.BuscaPageModule)
  },
  {
    path: 'vinho-form',
    loadChildren: () => import('./vinho-form/vinho-form.module').then( m => m.VinhoFormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
