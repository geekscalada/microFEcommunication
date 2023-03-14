import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, timer } from 'rxjs';

enum messageType {
  UserLogin = 'user:login',  
  UserLogout = 'user:logout',
  UserRegister = 'user:register',
  UserMessage = 'user:message'
}

@Injectable({
  providedIn: 'root'
})
export class CommonsLibService {

  public enum : messageType | undefined;

  private static instance: CommonsLibService;

  private constructor() { }

  public static getInstance(): CommonsLibService {
    if (!CommonsLibService.instance) {
      console.log("creando una nueva instancia")
      CommonsLibService.instance = new CommonsLibService();
    }
    console.log("Retornando instancia")
    return CommonsLibService.instance;
  }

  public _channelSource = new BehaviorSubject<string>("");
  

  sendMessage(message: string): any {    
    this._channelSource.next(message);
  }

  getMessage(): Observable<any> {    
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