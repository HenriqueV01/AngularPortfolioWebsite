import { ProjetosService } from './../_services/projetos.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projeto } from '../_models/Projeto';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projetos = {} as Projeto[];

  constructor(private titleService: Title, private projetoService: ProjetosService){
    this.titleService.setTitle('Henrique Venâncio - Portfólio')
  }

  ngOnInit(): void {
    this.projetos = this.projetoService.getProjetos();
  }

}
