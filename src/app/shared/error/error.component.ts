import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  textoError : string;
  suscription : Subscription;
  mostrarMensaje : boolean;

  constructor(private _errorService : ErrorService) { 
    this.textoError = '';
    this.mostrarMensaje = false;
    
    this.suscription = this._errorService.getErrorObservable().subscribe(data => {
      this.mostrarMensajeError(data);
    })
  }

  ngOnInit(): void {
  }

  mostrarMensajeError(textoError : string){
    this.textoError = textoError;
    this.mostrarMensaje = true;
    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 3000);
  }

}
