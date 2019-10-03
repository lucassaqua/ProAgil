import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



    // o modulo.ts tem variáveis que podem ser usadas pelo modulo.html e,
   // leva html e css (no modulo.html/css) que podem ser usados no html "principal"(o do app)
// O component faz a ligação entre o html "principal" e os  html dos componentes "secundarios"
@Component({
  selector: 'app-eventos',                  // qnd a pessoa usa <app-eventos>,
  templateUrl: './eventos.component.html', // vai pegar o que estiver aqui. Em eventos.component.html
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  // as variaveis aqui só podem ser usadas pelo eventos.componemt.html

  // eventos: any = [   // a variável eventos é do tipo any
  //                   {
  //                   EventoId: 1,
  //                   Tema: 'Angular',
  //                   Local: 'Belo Horizonte'
  //                   },
  //                   {
  //                   EventoId: 2,
  //                   Tema: '.NET Core',
  //                   Local: 'Rio de Janeiro'
  //                   },
  //                   {
  //                   EventoId: 3,
  //                   Tema: 'Angular e .NET Core',
  //                   Local: 'Rio de Janeiro'
  //                   }
  // ];
  eventos: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }
  getEventos(){
    this.http.get('http://localhost:5000/api/values').subscribe(
      response => { this.eventos = response;
    }, error => {
        console.log(error);
      });
  }

}
