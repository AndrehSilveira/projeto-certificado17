import { Pipe, PipeTransform } from '@angular/core';
import { Aluno } from '../aluno/Aluno';

@Pipe({
  name: 'mediaAluno',
  standalone: true
})
export class MediaAlunoPipe implements PipeTransform {

  transform(objeto:Aluno): number {
    return ((objeto.nota1 + objeto.nota2) / 2);
  }

}
