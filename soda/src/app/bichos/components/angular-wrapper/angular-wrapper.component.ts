import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
@Component({
  selector: 'app-angular-wrapper',
  templateUrl: './angular-wrapper.component.html',
  styleUrls: ['./angular-wrapper.component.scss'],
})
export class AngularWrapperComponent implements OnInit {
  @ViewChild('ngMfContainer', { read: ViewContainerRef }) viewContainer!: ViewContainerRef;
  constructor() { }
  @Input() options = {} as LoadRemoteModuleOptions;
  @Input() component: string;
  ngOnInit() {
    this.loadMf();
  }


  async loadMf() {
    const m = await loadRemoteModule(this.options);
    console.log(m)



    const ref = this.viewContainer.createComponent(m[this.component]);




  }
}
