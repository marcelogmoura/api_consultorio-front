import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentosCadastroComponent } from './atendimentos-cadastro.component';

describe('AtendimentosCadastroComponent', () => {
  let component: AtendimentosCadastroComponent;
  let fixture: ComponentFixture<AtendimentosCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtendimentosCadastroComponent]
    });
    fixture = TestBed.createComponent(AtendimentosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
