import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonsLibService3 {

  private static instance: CommonsLibService3;

  private constructor() { }

  public static getInstance(): CommonsLibService3 {
    if (!CommonsLibService3.instance) {
      console.log("no hay instancia, vamos a crear una nueva")
      CommonsLibService3.instance = new CommonsLibService3();
    }
    console.log("Esta es la instancia que vamos a usar ****************************", this.instance)
    return CommonsLibService3.instance;
  }

  public _channelSource = new BehaviorSubject<string>("");
  //public channelPayment$ = this._channelSource.asObservable();

  sendMessage(message: string): any {
    console.log("sendMessage", message)
    this._channelSource.next(message);
  }

  getMessage(): Observable<any> {
    console.log("getMessage", this._channelSource.asObservable())
    return this._channelSource.asObservable();
  }

  getHola(): Observable<string> {
    return timer(25000).pipe(
      switchMap(() => {
        return of("Hola desde el servicio commons-lib");
      })
    );
  }


  

  // Agrega aquí los métodos y propiedades que necesites
}