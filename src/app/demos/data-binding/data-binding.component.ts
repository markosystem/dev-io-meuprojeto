import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  contadorClique: number = 0;
  nome: string = "";

  incrementar() {
    this.contadorClique++;
  }

  keyUp(event: any) {
    console.log(event.target.value);
    this.nome = event.target.value;
  }

  showMessage(msg: string) {
    alert(msg);
    console.log(msg);
  }
}
