import { Component, OnInit } from '@angular/core';
import { Compromisso } from '../compromisso';
import { CompromissosService } from '../compromissos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agenda-de-compromissos',
  templateUrl: './agenda-de-compromissos.component.html',
  styleUrl: './agenda-de-compromissos.component.css'
})



export class AgendaDeCompromissosComponent implements OnInit {
  compromissos: Compromisso[] = [  ]
  
  constructor (private compromissosService: CompromissosService, private router: Router){}

  ngOnInit(): void {
    this.compromissosService.getCompromissos().subscribe(((data: Compromisso[]) => this.compromissos = data));

  }
  
  loadCompromissos(){
    this.compromissosService.getCompromissos().subscribe({
      next: data => this.compromissos = data
    })
  };

  delete(Compromisso: Compromisso){
    this.compromissosService.delete(Compromisso).subscribe({
      next: () => this.loadCompromissos()
    })
  };

  update(Compromissos: Compromisso){
    this.compromissosService.update(Compromissos).subscribe({
      next: () => this.loadCompromissos()
    })
  }

  create(){
    this.router.navigate(['form-agenda'])
  };


}
