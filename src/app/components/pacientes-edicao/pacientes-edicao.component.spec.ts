import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesEdicaoComponent } from './pacientes-edicao.component';

describe('PacientesEdicaoComponent', () => {
  let component: PacientesEdicaoComponent;
  let fixture: ComponentFixture<PacientesEdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientesEdicaoComponent]
    });
    fixture = TestBed.createComponent(PacientesEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
