import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Aluno } from '../aluno/Aluno'
import { MediaAlunoPipe } from "../pipe/media-aluno.pipe";

@Component({
  selector: 'app-formulario-escolar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MediaAlunoPipe],
  templateUrl: './formulario-escolar.component.html',
  styleUrl: './formulario-escolar.component.scss'
})
export class FormularioEscolarComponent {

  // Formulário
  formulario = new FormGroup({
    aluno : new FormControl('', [Validators.required, Validators.minLength(3)]),
    nota1 : new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
    nota2 : new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)])
  });


  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  //Vetor para armazenar os alunos e as notas
  vetor:Aluno[] = [];

  // Armazenar indice do aluno selecionado
  indice:number = -1;

  //Cadastar o aluno
  Cadastrar(){
    this.vetor.push(this.formulario.value as Aluno);

    // Limpeza das informações
    this.formulario.reset();

    // Visualização
    console.table(this.vetor);
  }

  Selecionar(indice: number){

    // atribuir indice do aluno
    this.indice = indice;

    //atribuir os dados do aluno ao formulário
    this.formulario.setValue({
      aluno: this.vetor[indice].aluno,
      nota1: this.vetor[indice].nota1,
      nota2: this.vetor[indice].nota2,
    })

    //Evitar de cadastrar, apenas editar, excluir ou cancelar
    this.btnCadastrar = false;

  }

  Alterar(){

    this.vetor[this.indice] = this.formulario.value as Aluno;

    // limpeza das informações nos inputs
    this.formulario.reset();

    // Mostrar o botão de cadastrar e ocultar o de editar, deletar e cancelar.
    this.btnCadastrar = true;
  }

  Remover(){

    this.vetor.splice(this.indice, 1);

    // limpeza das informações nos inputs
    this.formulario.reset();

    // Mostrar o botão de cadastrar e ocultar o de editar, deletar e cancelar.
    this.btnCadastrar = true;
  }

  Cancelar(){

    // limpeza das informações nos inputs
    this.formulario.reset();

    // Mostrar o botão de cadastrar e ocultar o de editar, deletar e cancelar.
    this.btnCadastrar = true;
  }

}
