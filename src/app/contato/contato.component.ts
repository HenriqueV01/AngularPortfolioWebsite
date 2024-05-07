import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  constructor(private titleService: Title){
    this.titleService.setTitle('Henrique Venâncio - Contato')
  }

}
