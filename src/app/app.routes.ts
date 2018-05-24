import {Routes} from '@angular/router';
import {CategoriaComponent  } from './categoria/categoria.component';
import {HomeComponent  } from './home/home.component';
import {CategoriaCreateComponent} from './categoria/create/create.component';
import {CategoriaIndexComponent} from './categoria/index/index.component';
import {ClassificacaoComponent } from './classificacao/classificacao.component';
import {ClassificacaoIndexComponent } from './classificacao/index/index.component';
import {ClassificacaoCreateComponent } from './classificacao/create/create.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteIndexComponent } from './cliente/cliente-index/cliente-index.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ItemMaterialComponent } from './item-material/item-material.component';
import { ItemMaterialIndexComponent } from './item-material/item-material-index/item-material-index.component';
import { ItemMaterialCreateComponent } from './item-material/item-material-create/item-material-create.component';
import {TipoServicoComponent} from './tipo-servico/tipo-servico.component';
import {TipoServicoIndexComponent} from './tipo-servico/tipo-servico-index/tipo-servico-index.component';
import {TipoServicoCreateComponent}  from './tipo-servico/tipo-servico-create/tipo-servico-create.component';
import { ServicoComponent } from './servico/servico.component';
import { ServicoIndexComponent } from './servico/servico-index/servico-index.component';
import { ServicoCreateComponent } from './servico/servico-create/servico-create.component';
import { ServicoDetalheComponent } from './servico/servico-detalhe/servico-detalhe.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaServicoComponent } from './categoria-detalhe/categoria-servico/categoria-servico.component';
import { ServicoCreateItemComponent } from './servico/servico-create-item/servico-create-item.component';
import { OrdemPagamentoComponent } from './ordem-pagamento/ordem-pagamento.component';
export const ROUTES: Routes =[
    {path: '',component:HomeComponent},
    {path:'categoria', component:CategoriaComponent, children:[
        {path:'index',component:CategoriaIndexComponent},
        {path:'create', component:CategoriaCreateComponent}
    ]},
    {path:'classificacao',component:ClassificacaoComponent, children:[
        {path:'index',component:ClassificacaoIndexComponent},
        {path:'create',component:ClassificacaoCreateComponent}
    ]},
    {path:'cliente',component:ClienteComponent, children:[
        {path:'index',component:ClienteIndexComponent},
        {path:'create',component:ClienteCreateComponent}
    ]},
    {path:'item-material',component:ItemMaterialComponent, children:[
      {path:'index',component:ItemMaterialIndexComponent},
      {path:'create',component:ItemMaterialCreateComponent}
    ]},
    {path:'tipo-servico',component:TipoServicoComponent, children:[
      {path:'index',component:TipoServicoIndexComponent},
      {path:'create',component:TipoServicoCreateComponent}
    ]},
    {path:'servico',component:ServicoComponent, children:[
        {path:'index',component:ServicoIndexComponent},
        {path:'create',component:ServicoCreateComponent}
      ]},
    {path:'tipo-servico/:id',component:ServicoComponent, 
        children:[
            {path:'',redirectTo:'servico', pathMatch: 'full'},
            {path:'servico',component:ServicoCreateItemComponent},
            {path:'reviewsServico',component:ServicoCreateComponent}
        ]
    },
    {path: 'ordem-pagamento', component: OrdemPagamentoComponent},
];
