import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aluno} from "./aluno.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  baseUrl = "http://localhost:8080/api/aluno"

  constructor(
    private http: HttpClient,
  ) { }

  incluirAluno(data: any): Observable<any>{
    return this.http.post("http://localhost:8080/api/aluno/incluir", data);
  }

  listarAluno(): Observable<any>{
    return this.http.get("http://localhost:8080/api/aluno/listar");
  }

  excluirAluno(id: any): Observable<any>{
    return this.http.post("http://localhost:8080/api/aluno/remover", {"id": id});
  }

  editarAluno(aluno: Aluno): Observable<any> {
    return this.http.put(`${this.baseUrl}/editar`, aluno).pipe(
      map(obj => obj)
    )
  }

  readById(id: string | null): Observable<Aluno> {
    return this.http.get(`${this.baseUrl}/get/${id}`).pipe(
      map(obj => obj)
    )
  }

  getTotalAlunos(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/getTotal`).pipe(
      map(obj => obj)
    )
  }
}
