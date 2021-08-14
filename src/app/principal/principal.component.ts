import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { estudiante } from '../entidades/estudiante';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuario:estudiante= {} as estudiante;
  usuarios:any;

  constructor(private http:HttpClient) { 
    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{
      this.usuarios=response;
    });
  }


  enviarPos():void{

    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar',this.usuario)
    .subscribe(response=>{
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

}
