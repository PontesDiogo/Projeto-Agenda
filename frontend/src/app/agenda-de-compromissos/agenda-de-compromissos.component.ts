import { Component, OnInit } from '@angular/core';
import { Compromisso } from '../compromisso';
import { FormGroup } from '@angular/forms';
import { CompromissosService } from '../compromissos.service';

@Component({
  selector: 'app-agenda-de-compromissos',
  templateUrl: './agenda-de-compromissos.component.html',
  styleUrl: './agenda-de-compromissos.component.css'
})



export class AgendaDeCompromissosComponent implements OnInit {
  compromissos: Compromisso[] = [  ]
  constructor (private compromissosService: CompromissosService){}

  ngOnInit(): void {
    this.compromissosService.getCompromissos().subscribe(((data: Compromisso[]) => this.compromissos = data));

  }
  loadCompromissos(){
    this.compromissosService.getCompromissos().subscribe({
      next: data => this.compromissos = data
    })
  };

  delete(Compromissos: Compromisso){
    this.compromissosService.delete(Compromissos).subscribe({
      next: () => this.loadCompromissos()
    })
  };

  update(Compromissos: Compromisso){
    this.compromissosService.update(Compromissos).subscribe({
      next: () => this.loadCompromissos()
    })
  }

  // create(){
  //   this.router.navigate(['compromisso'])
  // };



}
