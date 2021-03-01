import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';
import { ErrorService } from 'src/app/shared/error/error.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {
  terminoBusqueda : string;

  constructor(private _imagenService : ImagenService, private _errorService : ErrorService) { 
    this.terminoBusqueda = '';
  }

  ngOnInit(): void {
  }

  buscarImagenes(){
    if (this.terminoBusqueda == ""){
      this._errorService.setTextoError('Debe definir un término de búsqueda');
      return;
    }
    this._imagenService.buscarImagenes(this.terminoBusqueda);
  }

}
