import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Projeto } from '../_models/Projeto';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project = {} as Projeto;

  constructor(public bsModalRef: BsModalRef){

  }

}
