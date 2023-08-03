import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { PacientesCadastroComponent } from './components/pacientes-cadastro/pacientes-cadastro.component';
import { PacientesConsultaComponent } from './components/pacientes-consulta/pacientes-consulta.component';
import { PacientesEdicaoComponent } from './components/pacientes-edicao/pacientes-edicao.component';
import { AtendimentosCadastroComponent } from './components/atendimentos-cadastro/atendimentos-cadastro.component';
import { AtendimentosConsultaComponent } from './components/atendimentos-consulta/atendimentos-consulta.component';

const routes: Routes = [

  { path: 'pacientes-cadastro', component: PacientesCadastroComponent },
  { path: 'pacientes-consulta', component: PacientesConsultaComponent },
  { path: 'pacientes-edicao', component: PacientesEdicaoComponent },
  { path: 'atendimentos-cadastro', component: AtendimentosCadastroComponent },
  { path: 'atendimentos-consulta' , component: AtendimentosConsultaComponent}

];

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
    RouterModule.forRoot(routes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


