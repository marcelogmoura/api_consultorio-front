import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentosConsultaComponent } from './atendimentos-consulta.component';

describe('AtendimentosConsultaComponent', () => {
  let component: AtendimentosConsultaComponent;
  let fixture: ComponentFixture<AtendimentosConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtendimentosConsultaComponent]
    });
    fixture = TestBed.createComponent(AtendimentosConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
