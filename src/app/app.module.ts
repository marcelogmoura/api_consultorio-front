import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { PacientesCadastroComponent } from './components/pacientes-cadastro/pacientes-cadastro.component';
import { PacientesConsultaComponent } from './components/pacientes-consulta/pacientes-consulta.component';
import { PacientesEdicaoComponent } from './components/pacientes-edicao/pacientes-edicao.component';
import { AtendimentosCadastroComponent } from './components/atendimentos-cadastro/atendimentos-cadastro.component';
import { AtendimentosConsultaComponent } from './components/atendimentos-consulta/atendimentos-consulta.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login'},

  { path: 'login', component: LoginComponent },
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
    AtendimentosConsultaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


