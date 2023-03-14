import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonsLibService {
  private static instance: CommonsLibService;

  private constructor() { }

  public static getInstance(): CommonsLibService {
    if (!CommonsLibService.instance) {
      console.log("no hay instancia, vamos a crear una nueva")
      CommonsLibService.instance = new CommonsLibService();
    }
    console.log("Esta es la instancia que vamos a usar ****************************", this.instance)
    return CommonsLibService.instance;
  }

  public _channelSource = new BehaviorSubject<string>("");
  public channelPayment$ = this._channelSource.asObservable();

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
  



// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, of, switchMap, timer } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CommonsLibService {
  
//   private static instance: CommonsLibService;
//   private dataSubject = new BehaviorSubject<string>('');

//   public  nInstance : string

//   private constructor() {

//     this.nInstance = Math.random().toString();

//   }

//   getNumber() : string {
//     return this.nInstance;
//   }

//   public static getInstance(): CommonsLibService {
//     if (!CommonsLibService.instance) {
//       console.log("no hay instancia, vamos a crear una nueva")
//       CommonsLibService.instance = new CommonsLibService();
//     }
//     console.log("Esta es la instancia que vamos a usar ****************************", this.instance)
//     return CommonsLibService.instance;
//   }

//     public _channelSource = new BehaviorSubject<string>("");
//   public channelPayment$ = this._channelSource.asObservable();

//   sendMessage(message : string): any {   
//     console.log("sendMessage", message, "desde la isntancia: " + this.nInstance)
//      this._channelSource.next(message);
//   }

//   getMessage() : Observable<any> {
//     console.log("getMessage", this._channelSource.asObservable())
//     return this._channelSource.asObservable();
//   }

//   getHola(): Observable<string> {
//     return timer(25000).pipe(
//       switchMap(() => {
//         return of("Hola desde el servicio commons-lib");
//       })
//     );
//   }



// }