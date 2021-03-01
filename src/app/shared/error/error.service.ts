import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private textoError$ = new Subject<string>();

  constructor() { }

  getErrorObservable(): Observable<string>{
    return this.textoError$.asObservable();
  }

  setTextoError(textoError : string){
    this.textoError$.next(textoError);
  }
}
