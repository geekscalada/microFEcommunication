import { Component, OnInit } from '@angular/core';


import { CommonlibrxjsService } from 'commonlibrxjs';
import { CommonlibrxjsService2 } from 'commonlibrxjsv2';

import {CommonsLibService} from 'sharedLib';

import {CommonsLibService3} from 'commonlib3'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public contador: number = 0;  

  public instanceCommonsLibService: CommonsLibService3 | undefined;

  constructor(

    private _commonlibrxjsService: CommonlibrxjsService,
    private _commonlibrxjsService2: CommonlibrxjsService2
    

  ) {


  }
  //End constructor

  


  ngOnInit() {    


    this.instanceCommonsLibService = CommonsLibService3.getInstance();
    

    this.instanceCommonsLibService.getMessage().subscribe((data) => {

      if (data && data == "Adding 1 to the counter") {
        this.contador = this.contador + 1;
      }

      console.log("mensaje en home.page", data)


    });


   


    

  }
}




