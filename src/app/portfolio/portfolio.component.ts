import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projeto } from '../_models/Projeto';
import { Tag } from '../_models/Tag';

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
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
  },{
    id: 2,
    name: 'Projeto Java App',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: [Tag.JAVA, Tag.TYPESCRIPT]
  },
  {
    id: 3,
    name: 'Projeto Spring Boot App',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: [Tag.SPRING_BOOT, Tag.JAVA]
  },{
    id: 4,
    name: 'Projeto Chrome Extension',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: [Tag.CSHARP]
  },{
    id: 5,
    name: 'Projeto Mobile API',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: [Tag.NODEJS, Tag.JAVASCRIPT]
  },
  {
    id: 6,
    name: 'Projeto Web API',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: [Tag.PHYTON]
  }]

  constructor(private titleService: Title){
    this.titleService.setTitle('Henrique Venâncio - Portfólio')
  }

}
