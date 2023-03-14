import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { BichosPage } from './bichos.page';
import { WebComponentWrapper } from '@angular-architects/module-federation-tools';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools/lib/web-components/web-component-wrapper';

const routes: Routes = [
  {
    path: '',
    component: BichosPage,
  },

  {
    path: 'motus',

    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:8101/remoteEntry.js',
        exposedModule: './motusMF'
      })
        .then((m: any) => m.HomePageModule)
  },
  {
    path: 'react', component: WebComponentWrapper,

    data: {
      type: 'script', remoteEntry: 'http://localhost:8102/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './reactMF',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BichosPageRoutingModule { }
