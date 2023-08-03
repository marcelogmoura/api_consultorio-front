import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pacientes-cadastro',
  templateUrl: './pacientes-cadastro.component.html',
  styleUrls: ['./pacientes-cadastro.component.css']
})
export class PacientesCadastroComponent {

  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ){
  }

  formCadastro = new FormGroup({

    nome: new FormControl('', [Validators.required , Validators.pattern(/^[A-Za-zÀ-Üà-ü]{3,50}$/)]),
    telefone: new FormControl('' , [Validators.required]),
    dataNascimento: new FormControl('' , [Validators.required]),

  });

  get form(): any {
    return this.formCadastro.controls;
  }

  onSubmit(): void {
    this.httpClient.post('http://localhost:8081/api/pacientes' , this.formCadastro.value)
      .subscribe({
        next: (data: any) => {
          this.mensagem = data.mensagem;
          this.formCadastro.reset();
        },
        error:(e) => {
          console.log(e.error);
        }
      })
  }

}
