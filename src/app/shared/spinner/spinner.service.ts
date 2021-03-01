import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private mostrarSpinner$ = new Subject<boolean>();

  constructor() { }

  getSpinnerObservable(): Observable<boolean>{
    return this.mostrarSpinner$.asObservable();
  }

  setMostrarSpinner(mostrarSpinner : boolean){
    this.mostrarSpinner$.next(mostrarSpinner);
  }  
}
