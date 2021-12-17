import { Component, OnInit } from '@angular/core';
import {Aluno} from "../aluno.model";
import {AlunoService} from "../aluno.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-visualizar-aluno',
  templateUrl: './visualizar-aluno.component.html',
  styleUrls: ['./visualizar-aluno.component.css']
})
export class VisualizarAlunoComponent implements OnInit {
  aluno: Aluno;

  constructor(private alunoService: AlunoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.alunoService.readById(id).subscribe(aluno => {
      this.aluno = aluno;
    });
  }

}
