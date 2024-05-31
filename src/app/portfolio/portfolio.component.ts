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

  isCollapsed: boolean = true;

  typescript: boolean = false;
  angular: boolean = false;
  springboot: boolean = false;
  java: boolean = false;
  javascript: boolean = false;
  nodejs: boolean = false;
  csharp: boolean = false;
  phyton: boolean = false;

  filtrando: boolean = false;

  projetos = {} as Projeto[];

  constructor(private titleService: Title, private projetoService: ProjetosService){
    this.titleService.setTitle('Henrique Venâncio - Portfólio')
  }

  ngOnInit(): void {
    this.projetos = this.projetoService.getProjetos();
  }

  filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if(this.springboot){
      filterTags.push(Tag.SPRING_BOOT);
    }

    if(this.java){
      filterTags.push(Tag.JAVA);
    }

    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }

    if(this.nodejs){
      filterTags.push(Tag.NODEJS);
    }

    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }

    if(this.phyton){
      filterTags.push(Tag.PHYTON);
    }

    if(filterTags.length > 0){
      this.filtrando = true;
    }else{
      this.filtrando = false;
    }

    if(filterTags.length === 0){
      this.projetos = this.projetoService.getProjetos();
    }else{
      this.projetos = this.projetoService.getProjetosByFilter(filterTags);
    }
  }

  resetFilter(){
    this.typescript = false;
    this.angular    = false;
    this.springboot = false;
    this.java       = false;
    this.javascript = false;
    this.nodejs     = false;
    this.csharp     = false;
    this.phyton     = false;
    this.filtrando  = false;

    this.projetos = this.projetoService.getProjetos();
  }

}
