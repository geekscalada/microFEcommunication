import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonlibrxjsService {

  constructor() { }

  public _channelSource = new BehaviorSubject<string>("");
  public channelPayment$ = this._channelSource.asObservable();

  sendMessage(message : string): any {   
   
     this._channelSource.next(message);
  }

  getMessage() : Observable<any> {
    return this._channelSource.asObservable();
  }

  getHola(): Observable<string> {
    return timer(25000).pipe(
      switchMap(() => {
        return of("Hola desde el servicio commons-lib");
      })
    );
  }


}


  



