import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDeCompromissosComponent } from './agenda-de-compromissos.component';

describe('AgendaDeCompromissosComponent', () => {
  let component: AgendaDeCompromissosComponent;
  let fixture: ComponentFixture<AgendaDeCompromissosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendaDeCompromissosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaDeCompromissosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
