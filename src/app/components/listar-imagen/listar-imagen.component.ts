import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {
  suscripcion : Subscription;
  termino : string;
  listaImagenes : any[] = [];
  imagenesPorPagina : number;
  paginaActual : number;
  cantidadPaginas : number;

  constructor(private _imagenservice : ImagenService, private _spinnerService : SpinnerService) { 
    this.termino = '';
    this.imagenesPorPagina = 20;
    this.paginaActual = 1;
    this.cantidadPaginas = 0;

    this.suscripcion = this._imagenservice.getBusquedaImagneObservable().subscribe(data => {
      this.termino = data;
      this.listaImagenes = [];
      this.buscarImagenes();
    })

  }

  ngOnInit(): void {
  }

  buscarImagenes(){
    this._spinnerService.setMostrarSpinner(true);
    this.listaImagenes = [];

    setTimeout(() => {
      this._imagenservice.getImagenes(this.termino, this.paginaActual, this.imagenesPorPagina).subscribe(data => {
        this.listaImagenes = data.hits;
        this.cantidadPaginas = Math.ceil(data.total / this.imagenesPorPagina);
        this._spinnerService.setMostrarSpinner(false);
      }, error => {
        console.log(error);
        this._spinnerService.setMostrarSpinner(false);
      })
    }, 2000);
  }

  verPaginacion(): boolean {
    return this.listaImagenes.length > 0;
  }

  verBotonAnterior(): boolean {
    return this.paginaActual != 1;
  }

  verBotonSiguiente(): boolean {
    return this.paginaActual <= this.cantidadPaginas;
  }

  paginaAnterior(): void{
    this.paginaActual--;
    this.buscarImagenes();
  }

  paginaSiguiente(): void{
    this.paginaActual++;
    this.buscarImagenes();
  }
}
