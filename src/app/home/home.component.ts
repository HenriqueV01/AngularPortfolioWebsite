import { ProjetosService } from './../_services/projetos.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projeto } from '../_models/Projeto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featureProjeto = {} as Projeto;

  constructor(private titleService: Title, private projetosService: ProjetosService){
    this.titleService.setTitle('Henrique Venâncio - Home')
  }

  ngOnInit(): void {
    this.featureProjeto = this.projetosService.getProjetosById(1);
  }

}
