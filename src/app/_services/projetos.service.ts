import { Injectable } from '@angular/core';
import { Projeto } from '../_models/Projeto';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  projetos: Projeto[] = [{
    id: 1,
    nome: 'Projeto Angular App',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
  },{
    id: 2,
    nome: 'Projeto Java App',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: [Tag.JAVA, Tag.TYPESCRIPT]
  },
  {
    id: 3,
    nome: 'Projeto Spring Boot App',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: [Tag.SPRING_BOOT, Tag.JAVA]
  },{
    id: 4,
    nome: 'Projeto Chrome Extension',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: [Tag.CSHARP]
  },{
    id: 5,
    nome: 'Projeto Mobile API',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: [Tag.NODEJS, Tag.JAVASCRIPT]
  },
  {
    id: 6,
    nome: 'Projeto Web API',
    resumo: 'Exemplo de descrição',
    descricao: 'Esse é um exemplo simples para demonstração.',
    linkProjeto: '',
    imagens: [],
    tags: [Tag.PHYTON]
  }]

  constructor() { }

  getProjetos(){
    return this.projetos;
  }

  getProjetosById(id: number): Projeto{
    let projeto = this.projetos.find(projeto => projeto.id === id);

    if(projeto === undefined){
      throw new TypeError('Não há projeto com esse id' + id);
    }
    return projeto;
  }

}
