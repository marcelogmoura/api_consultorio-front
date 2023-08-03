import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesCadastroComponent } from './pacientes-cadastro.component';

describe('PacientesCadastroComponent', () => {
  let component: PacientesCadastroComponent;
  let fixture: ComponentFixture<PacientesCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientesCadastroComponent]
    });
    fixture = TestBed.createComponent(PacientesCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
