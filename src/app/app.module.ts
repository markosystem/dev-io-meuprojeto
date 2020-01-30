import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { ProdutoService } from './produtos/produtos.service';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    ProdutoService,
    {
      provide: APP_BASE_HREF, useValue: '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
