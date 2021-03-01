import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  mostrarSpinner : boolean;
  suscription : Subscription;

  constructor(private _spinnerService : SpinnerService) { 
    this.mostrarSpinner = false;

    this.suscription = _spinnerService.getSpinnerObservable().subscribe(data=> {
       this.SetMostrarSpinner(data);
    })
  }

  ngOnInit(): void {
  }

  SetMostrarSpinner(mostrar : boolean){
    this.mostrarSpinner = mostrar;
  }
}
