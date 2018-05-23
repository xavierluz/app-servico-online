import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { DataTablesModule } from 'angular-datatables';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';
import { HeaderOnlineComponent } from './header-online/header-online.component';
import { SideBarMenuOnlineComponent } from './side-bar-menu-online/side-bar-menu-online.component';
import { ControlSideBarOnlineComponent } from './control-side-bar-online/control-side-bar-online.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EventoCancelarSalvarComponent } from './eventos/evento-cancelar-salvar/evento-cancelar-salvar.component';
import { CategoriaCreateComponent } from './categoria/create/create.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaIndexComponent } from './categoria/index/index.component';
import { ClassificacaoComponent } from './classificacao/classificacao.component';
import { ClassificacaoIndexComponent } from './classificacao/index/index.component';
import {ClassificacaoCreateComponent} from './classificacao/create/create.component';
import {CategoriaService} from './categoria/servicos/categoria.service';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteIndexComponent } from './cliente/cliente-index/cliente-index.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ClienteContatoComponent } from './cliente/cliente-contato/cliente-contato.component';
import {ClienteService} from './cliente/servico/cliente.service';
import { ItemMaterialComponent } from './item-material/item-material.component';
import { ItemMaterialIndexComponent } from './item-material/item-material-index/item-material-index.component';
import { ItemMaterialCreateComponent } from './item-material/item-material-create/item-material-create.component';
import { ItemMaterialService} from './item-material/servico/item.material.service';
import { TipoServicoComponent } from './tipo-servico/tipo-servico.component';
import { TipoServicoIndexComponent } from './tipo-servico/tipo-servico-index/tipo-servico-index.component';
import { TipoServicoCreateComponent } from './tipo-servico/tipo-servico-create/tipo-servico-create.component';
import { TipoServicoService} from './tipo-servico/servico/tipo.servico.service';
import { ServicoComponent } from './servico/servico.component';
import { ServicoIndexComponent } from './servico/servico-index/servico-index.component';
import { ServicoCreateComponent } from './servico/servico-create/servico-create.component';
import {ServicoService } from './servico/servico/servico.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { DropdownComponent } from './dropdown/dropdown.component';
import {PagerService} from './paginacao/pagina-service';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PagamentoIndexComponent } from './pagamento/pagamento-index/pagamento-index.component';
import { PagamentoCreateComponent } from './pagamento/pagamento-create/pagamento-create.component';
import { ServicoComponenteService } from './servico/servico/servico-componente.service';
import { ServicoDetalheComponent } from './servico/servico-detalhe/servico-detalhe.component';
import { CompraComponent } from './compra/compra.component';
import { CompraService } from './compra/servico/compra.service';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaServicoComponent } from './categoria-detalhe/categoria-servico/categoria-servico.component';
import { CategoriaServicoItemComponent } from './categoria-detalhe/categoria-servico-item/categoria-servico-item.component';
@NgModule({ 
  declarations: [
    AppComponent,
    HeaderOnlineComponent,
    SideBarMenuOnlineComponent,
    ControlSideBarOnlineComponent,
    FooterComponent,
    HomeComponent,
    EventoCancelarSalvarComponent,
    CategoriaCreateComponent,
    CategoriaComponent,
    CategoriaIndexComponent,
    ClassificacaoComponent,
    ClassificacaoIndexComponent,
    ClassificacaoCreateComponent,
    ClienteComponent,
    ClienteIndexComponent,
    ClienteCreateComponent,
    ClienteContatoComponent,
    ItemMaterialComponent,
    ItemMaterialIndexComponent,
    ItemMaterialCreateComponent,
    TipoServicoComponent,
    TipoServicoIndexComponent,
    TipoServicoCreateComponent,
    ServicoComponent,
    ServicoIndexComponent,
    ServicoCreateComponent,
    DropdownComponent,
    PagamentoComponent,
    PagamentoIndexComponent,
    PagamentoCreateComponent,
    ServicoDetalheComponent,
    CategoriaServicoComponent,
    CategoriaServicoItemComponent,
    CompraComponent,
    CategoriaDetalheComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AngularMultiSelectModule,
    CurrencyMaskModule
  ],
  providers: [CategoriaService,ClienteService,ItemMaterialService,TipoServicoService,ServicoService,PagerService,ServicoComponenteService,CompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
