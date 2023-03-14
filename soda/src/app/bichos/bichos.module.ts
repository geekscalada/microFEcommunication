import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BichosPageRoutingModule } from './bichos-routing.module';

import { BichosPage } from './bichos.page';
import { ReactWrapperComponent } from './components/react-wrapper/react-wrapper.component';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { AngularWrapperComponent } from './components/angular-wrapper/angular-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BichosPageRoutingModule,
    ModuleFederationToolsModule // <-- esta linea es para que funcione el mfc-wrapper
  ],
  declarations: [BichosPage, ReactWrapperComponent, AngularWrapperComponent]
})
export class BichosPageModule { }
