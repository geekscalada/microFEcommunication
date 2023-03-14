import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { createCustomElement } from '@angular/elements';
import { HomePage } from './home/home.page';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }
  ngDoBootstrap(appRef: ApplicationRef): void {

    if (!customElements.get('angular-motus-mf')) {
      console.log('yea')
      customElements.define(
        'angular-motus-mf',
        createCustomElement(HomePage, { injector: this.injector })

      );
      console.log(customElements.get('angular-motus-mf'))
    }

  }
}
