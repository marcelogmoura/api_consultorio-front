import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pacientes-cadastro',
  templateUrl: './pacientes-cadastro.component.html',
  styleUrls: ['./pacientes-cadastro.component.css']
})
export class PacientesCadastroComponent {

  formCadastro = new FormGroup({

    nome: new FormControl('', [Validators.required , Validators.pattern(/^[A-Za-zÀ-Üà-ü]{3,50}$/)]),
    telefone: new FormControl('' , [Validators.required]),
    dataNascimento: new FormControl('' , [Validators.required, Validators.pattern(/^[0-9]*$/)]),

  });

  get form(): any {
    return this.formCadastro.controls;
  }

}
