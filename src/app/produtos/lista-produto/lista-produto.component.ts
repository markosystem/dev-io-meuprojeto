import { ProdutoService } from './../produtos.service';
import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';
import { error } from 'util';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(this.produtos);
        },
        error => console.log(error)
      );
  }

}
