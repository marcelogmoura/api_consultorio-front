import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pacientes-consulta',
  templateUrl: './pacientes-consulta.component.html',
  styleUrls: ['./pacientes-consulta.component.css']
})
export class PacientesConsultaComponent implements OnInit {

  pacientes: any[] = [];

  constructor(
    private HttpClient: HttpClient
  ){
  }

  ngOnInit(): void {
    this.HttpClient.get('http://localhost:8081/api/pacientes')
      .subscribe({
        next: (data) => {
          this.pacientes = data as any[];
        },
        error: (e) => {
          console.log(e);
        }

      })


  }
  // mascara ok
  formatarTel(telefone: string): string {
    const telFormatado = telefone.replace(/^(\d{4})(\d{4})$/, '$1-$2');
    return telFormatado;
  }

}
