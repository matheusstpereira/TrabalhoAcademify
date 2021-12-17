import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AlunoService} from "../aluno.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css'],
  providers: [AlunoService]
})

export class ListarAlunoComponent implements OnInit {

  displayedColumns = ['id', 'nome', 'dataHoraCadastro', 'nascimento', 'matricula', 'acoes'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.alunoService.listarAluno().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort
    })
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }


  deleteAluno(id: number) {
    try {
      this.alunoService.excluirAluno(id).subscribe(value => {
        console.log(value)
        alert('Aluno Removido');
        this.ngOnInit();
      })
    } finally {

    }
  }

  updateAluno(id: number){
    this.router.navigate(['/editar', id]);
  }

  viewAluno(id: number){
    this.router.navigate(['/visualizar', id]);
  }

}

