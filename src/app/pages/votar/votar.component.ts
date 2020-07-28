import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { Game } from "./../../interfaces/interfaces";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.css']
})
export class VotarComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.obtenerNominados().subscribe(juegos => {
      console.log(juegos);
      this.juegos = juegos;
    });
  }

  votarJuego(juego: Game){
    console.log(juego.name + '|' + juego.id);
    this.gameService.votarjuego(juego.id).subscribe((resp: {ok: boolean, mensaje: string}) => {
      console.log(resp);

      if(resp.ok){
        Swal.fire({title: '¡Éxito!', text: resp.mensaje, icon: 'success'});
      }else{
        Swal.fire({title: '¡Error!', text: resp.mensaje, icon: 'error'});
      }
    });
  }
}