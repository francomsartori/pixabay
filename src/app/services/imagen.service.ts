import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  private terminoBusqueda$ = new Subject<string>();

  constructor(private http : HttpClient) { 

  }

  getBusquedaImagneObservable(): Observable<string>{
    return this.terminoBusqueda$.asObservable();
  }

  buscarImagenes(termino: string){
    this.terminoBusqueda$.next(termino);
  }

  getImagenes(termino : string, pagina: number = 1, cantidad: number = 20): Observable<any>{
    const KEY = '20407116-cb2f31123b99b77e1a65d241e';
    const URL = 'https://pixabay.com/api/?key=' + KEY + '&q=' + termino + '&page=' + pagina + '&per_page=' + cantidad;
    console.log(URL);
    return this.http.get(URL);
  }



}
