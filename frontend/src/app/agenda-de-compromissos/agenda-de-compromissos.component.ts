import { Component } from '@angular/core';
import { Compromisso } from '../compromisso';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agenda-de-compromissos',
  templateUrl: './agenda-de-compromissos.component.html',
  styleUrl: './agenda-de-compromissos.component.css'
})



export class AgendaDeCompromissosComponent {
  compromissos: Compromisso[] = [  ]
  
}
