import { Component, OnInit } from '@angular/core';
import {Aluno} from "../aluno.model";
import {AlunoService} from "../aluno.service";


@Component({
  selector: 'app-incluir-aluno',
  templateUrl: './incluir-aluno.component.html',
  styleUrls: ['./incluir-aluno.component.css']
})
export class IncluirAlunoComponent implements OnInit {

  aluno: Aluno = new Aluno();

  constructor(private alunoService: AlunoService
  ) { }

  salvarAluno(){
    console.log(this.aluno);
    this.aluno.dataHoraCadastro = new Date();
    this.alunoService.incluirAluno(this.aluno).subscribe(aluno => {
      this.aluno = new Aluno();
      alert('Aluno Cadastrado');
    }, error => {
      console.log('Erro ao cadastrar o aluno', error)
      alert('Erro ao cadastrar o aluno');
    })
  }

  ngOnInit(): void {
  }

}
