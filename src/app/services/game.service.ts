import { environment } from "./../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor(private hhtp: HttpClient) { }

  obtenerNominados(){

    if(this.juegos.length > 0){
      // No hay juegos
      console.log('Juegos cargados desde caché');
      return of(this.juegos);
    }else{
      console.log('Juegos cargados desde Firebase');
      return this.hhtp.get<Game[]>(`${environment.urlGoty}/apiGoty/goty`).pipe(tap(juegos => this.juegos = juegos));
      
    }

  }

  votarjuego(id: string){
    return this.hhtp.post(`${environment.urlGoty}/apiGoty/goty/${id}`,{}).pipe(catchError(err => {
      console.log('Error en la solicutud');
      console.log(err);

      return of(err.error);
    }));
  }
}
