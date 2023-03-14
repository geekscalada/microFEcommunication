import { Component, OnInit } from '@angular/core';
import { CommonsLibService } from 'commonlib4';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public contador: number = 0;  

  private _commonLibService: CommonsLibService | undefined;

  constructor(

  ) {

  }
  //End constructor
  
  sendMessageContador(): void {    
    this._commonLibService?.sendMessage("Adding 1 to the counter");    
  }
  
  
  

  ngOnInit() {    


    this._commonLibService = CommonsLibService.getInstance();
    

    this._commonLibService.getMessage().subscribe((data) => {

      if (data) {
        this.contador = this.contador + 1;      
      }

      console.log("Mensaje recibido en motus(angular): ", data)

    });

    


    

  }
}




