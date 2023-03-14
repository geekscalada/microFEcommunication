import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-wrapper',
  templateUrl: './react-wrapper.component.html',
  styleUrls: ['./react-wrapper.component.scss'],
})
export class ReactWrapperComponent implements OnInit {
  @Input() options = {} as WebComponentWrapperOptions;
  props = {
    "message": "Hello from Shell"
  }

  events = {
    "saveRecord": (event: any) => {
      console.debug('saveRecord!', event);
    }
  }



  constructor() { }

  ngOnInit() {

  }

}
