import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./alunos/components/home/home.component";
import { EditarAlunoComponent } from "./alunos/components/editar-aluno/editar-aluno.component";
import { IncluirAlunoComponent } from "./alunos/components/incluir-aluno/incluir-aluno.component";
import { ListarAlunoComponent } from "./alunos/components/listar-aluno/listar-aluno.component";
import { VisualizarAlunoComponent } from "./alunos/components/visualizar-aluno/visualizar-aluno.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'editar/:id', component: EditarAlunoComponent},
  {path: 'incluir', component: IncluirAlunoComponent},
  {path: 'listar', component: ListarAlunoComponent},
  {path: 'visualizar/:id', component: VisualizarAlunoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
