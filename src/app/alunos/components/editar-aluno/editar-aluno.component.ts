import {Component, OnInit} from '@angular/core';
import {Aluno} from "../aluno.model";
import {AlunoService} from "../aluno.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})

export class EditarAlunoComponent implements OnInit {

  aluno: Aluno;

  constructor(private alunoService: AlunoService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.alunoService.readById(id).subscribe(aluno => {
      this.aluno = aluno
    });
  }

  updateAluno(): void{
    this.alunoService.editarAluno(this.aluno).subscribe(() => {
      this.alunoService;
      this.router.navigate(["/listar"]);
      alert('Aluno Atualizado');
    }, error => {
      console.log('Erro ao atualizar o aluno', error)
      alert('Erro ao Atualizar o aluno');
    })
  }


}

