import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Francislei";
  dataNascimento = "1980-03-14";
  urlImagem = "/assets/joao.jpg";
  mostrarDataNascimento() {
    alert(`A data de nascimento do João é: ${this.dataNascimento}`);
  }
}
