import { Component } from '@angular/core';
import { Compromisso } from '../compromisso';
import { CompromissosService } from '../compromissos.service';
import { Router } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Compromissos: Compromisso [] = [];

  constructor(private service: CompromissosService,
  private router: Router
  ){}

  ngOnInit(){
    this.loadCompromissos();
  }

  loadCompromissos(){
    this.service.getCompromissos().subscribe({
      next: data => this.Compromissos = data
    })
  };
}
