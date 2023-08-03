import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesConsultaComponent } from './pacientes-consulta.component';

describe('PacientesConsultaComponent', () => {
  let component: PacientesConsultaComponent;
  let fixture: ComponentFixture<PacientesConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientesConsultaComponent]
    });
    fixture = TestBed.createComponent(PacientesConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
