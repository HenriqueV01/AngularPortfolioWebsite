import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Projeto } from './../_models/Projeto';
import { Component, Input } from '@angular/core';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() projeto = {} as Projeto;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService){

  }

  OpenProjectModal(){
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.projeto
      }
    };

    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }

}
