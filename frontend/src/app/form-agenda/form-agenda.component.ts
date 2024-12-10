import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompromissosService } from '../compromissos.service';

@Component({
  selector: 'app-form-compromissos',
  templateUrl: './form-agenda.component.html',
  styleUrl: './form-agenda.component.css'
})
export class FormCompromissosComponent implements OnInit{

  formGroupCompromissos: FormGroup;
  isEditing: boolean = false;

    constructor(private router: Router,
                private activatedRouter: ActivatedRoute,
                private service: CompromissosService,
                private formbuilder: FormBuilder
                ){
                  this.formGroupCompromissos = formbuilder.group({
                    id:                [''],
                    titulo:             [''],
                    descicao:       [''],
                    dataInicio:   [''],
                    dataFim:         [''],
                    horaInicio:           [''],
                    horaFim:             [''],
                    local: ['']
                  })
                };

   ngOnInit(): void {
   const id = Number(this.activatedRouter.snapshot.paramMap.get("id"))
     if(id != 0){   
    this.LoadCompromissos(id);
     this.isEditing = true;  
     }
   }

    LoadCompromissos(id: number){
      this.service.getCompromissosById(id).subscribe({
        next: data => this.formGroupCompromissos.setValue(data)
      })
    };

    update(){
      this.service.update(this.formGroupCompromissos.value).subscribe({
        next: () => this.router.navigate(['compromissos'])
      })
    }

    save(){
      const titulo = this.formGroupCompromissos.get('title')?.value;
      if ( !titulo || titulo.trim() === "" ){
        alert("Verifique o titulo")
      }
      else{
      this.service.save(this.formGroupCompromissos.value).subscribe({
        next: () => this.router.navigate([`/compromissos`])
      })
    }
  }

}