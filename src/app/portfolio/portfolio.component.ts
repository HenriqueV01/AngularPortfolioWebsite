import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projeto } from '../_models/Projeto';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projetos: Projeto[] = [{
    id: 1,
    name: 'Projeto Angular App',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: ['Angular', 'TypeScript']
  },{
    id: 2,
    name: 'Projeto Java App',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: ['Java', 'TypeScript']
  },
  {
    id: 3,
    name: 'Projeto Spring Boot App',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: ['Spring Boot', 'TypeScript']
  }]

  constructor(private titleService: Title){
    this.titleService.setTitle('Henrique Venâncio - Portfólio')
  }

}
