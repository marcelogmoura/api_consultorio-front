import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { PacientesCadastroComponent } from './components/pacientes-cadastro/pacientes-cadastro.component';
import { PacientesConsultaComponent } from './components/pacientes-consulta/pacientes-consulta.component';
import { PacientesEdicaoComponent } from './components/pacientes-edicao/pacientes-edicao.component';
import { AtendimentosCadastroComponent } from './components/atendimentos-cadastro/atendimentos-cadastro.component';
import { AtendimentosConsultaComponent } from './components/atendimentos-consulta/atendimentos-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesCadastroComponent,
    PacientesConsultaComponent,
    PacientesEdicaoComponent,
    AtendimentosCadastroComponent,
    AtendimentosConsultaComponent
  ],
  imports: [
    BrowserModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


