import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Henrique Venâncio - Sobre')
  }

  downloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','./assets/Curriculo-Henrique-Venancio.pdf');
    link.setAttribute('download','Curriculo-Henrique-Venancio.pdf');
    link.click();
    link.remove();
  }

}
