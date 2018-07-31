import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID  } from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {ROUTES} from './app.routes';
import { DataTablesModule } from 'angular-datatables';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { FileUploadModule } from "angular-file-uploader";
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
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteIndexComponent } from './cliente/cliente-index/cliente-index.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ClienteContatoComponent } from './cliente/cliente-contato/cliente-contato.component';
import { ItemMaterialComponent } from './item-material/item-material.component';
import { ItemMaterialIndexComponent } from './item-material/item-material-index/item-material-index.component';
import { ItemMaterialCreateComponent } from './item-material/item-material-create/item-material-create.component';
import { TipoServicoComponent } from './tipo-servico/tipo-servico.component';
import { TipoServicoIndexComponent } from './tipo-servico/tipo-servico-index/tipo-servico-index.component';
import { TipoServicoCreateComponent } from './tipo-servico/tipo-servico-create/tipo-servico-create.component';
import { ServicoComponent } from './servico/servico.component';
import { ServicoIndexComponent } from './servico/servico-index/servico-index.component';
import { ServicoCreateComponent } from './servico/servico-create/servico-create.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PagamentoIndexComponent } from './pagamento/pagamento-index/pagamento-index.component';
import { PagamentoCreateComponent } from './pagamento/pagamento-create/pagamento-create.component';
import { ServicoDetalheComponent } from './servico/servico-detalhe/servico-detalhe.component';
import { CompraComponent } from './compra/compra.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaServicoComponent } from './categoria-detalhe/categoria-servico/categoria-servico.component';
import { CategoriaServicoItemComponent } from './categoria-detalhe/categoria-servico-item/categoria-servico-item.component';
import { TipoServicoModelComponent } from './tipo-servico/model/tipo-servico-model/tipo-servico-model.component';
import { ServicoItemComponent } from './servico/servico-item/servico-item.component';
import { ServicoCreateItemComponent } from './servico/servico-create-item/servico-create-item.component';

import { registerLocaleData } from '@angular/common';
import localePt  from "./pt-PT";

import { SharedModule } from './shared/shared.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EmpresaCreateComponent } from './empresa/empresa-create/empresa-create.component';
import { EmpresaService } from './empresa/servico/empresa.service';
import { EmpresaDetalheComponent } from './empresa/empresa-detalhe/empresa-detalhe.component';
import { EmpresaEditarComponent } from './empresa/empresa-editar/empresa-editar.component';
import { PerfilFuncaoComponent } from './perfil-funcao/perfil-funcao.component';
import { PerfilFuncaoRequisicaoComponent } from './perfil-funcao-requisicao/perfil-funcao-requisicao.component';
import { UsuarioRequisicaoComponent } from './usuario-requisicao/usuario-requisicao.component';
import { PerfilFuncaoCreateComponent } from './perfil-funcao/perfil-funcao-create/perfil-funcao-create.component';
import { PerfilFuncaoRequisicaoCreateComponent } from './perfil-funcao-requisicao/perfil-funcao-requisicao-create/perfil-funcao-requisicao-create.component';
import { PerfilFuncaoServices } from './perfil-funcao/servico/perfil-funcao.services';
import { PerfilFuncaoRequisicaoServices } from './perfil-funcao-requisicao/servico/perfil-funcao-requisicao.services';
import { UsuarioCreateComponent } from './usuario/usuario-create/usuario-create.component';
import { UsuarioServices } from './usuario/servico/usuario.service';
import { UsuarioRequisicaoCreateComponent } from './usuario-requisicao/usuario-requisicao-create/usuario-requisicao-create.component';
import { UsuarioFuncaoComponent } from './usuario-funcao/usuario-funcao.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioLoginCreateComponent } from './usuario-login/usuario-login-create/usuario-login-create.component';
import { UsuarioTokenComponent } from './usuario-token/usuario-token.component';
import { UsuarioTokenCreateComponent } from './usuario-token/usuario-token-create/usuario-token-create.component';

registerLocaleData(localePt,'pt-BR');
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
    CategoriaDetalheComponent,
    TipoServicoModelComponent,
    ServicoItemComponent,
    ServicoCreateItemComponent,
    UsuarioComponent,
    EmpresaComponent,
    EmpresaCreateComponent,
    EmpresaDetalheComponent,
    EmpresaEditarComponent,
    PerfilFuncaoComponent,
    PerfilFuncaoRequisicaoComponent,
    UsuarioRequisicaoComponent,
    PerfilFuncaoCreateComponent,
    PerfilFuncaoRequisicaoCreateComponent,
    UsuarioCreateComponent,
    UsuarioRequisicaoCreateComponent,
    UsuarioFuncaoComponent,
    UsuarioLoginComponent,
    UsuarioLoginCreateComponent,
    UsuarioTokenComponent,
    UsuarioTokenCreateComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule, 
    SharedModule.forRoot(),
    DataTablesModule,
    HttpModule,
    RouterModule.forRoot(ROUTES,{preloadingStrategy:PreloadAllModules}),
    AngularMultiSelectModule,
    CurrencyMaskModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, EmpresaService, ,
    PerfilFuncaoServices, PerfilFuncaoRequisicaoServices, UsuarioServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
