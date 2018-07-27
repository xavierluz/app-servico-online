import { NgModule } from "@angular/core";
import { OrdemService } from "../ordem-pagamento/servico/ordem.service";
import { CategoriaService } from "../categoria/servicos/categoria.service";
import { ClienteService } from "../cliente/servico/cliente.service";
import { ItemMaterialService } from "../item-material/servico/item.material.service";
import { TipoServicoService } from "../tipo-servico/servico/tipo.servico.service";
import { ServicoService } from "../servico/servico/servico.service";
import { PagerService } from "../paginacao/pagina-service";
import { ServicoComponenteService } from "../servico/servico/servico-componente.service";
import { CompraService } from "../compra/servico/compra.service";

@NgModule({
    providers:[CategoriaService,ClienteService,ItemMaterialService,TipoServicoService,ServicoService,PagerService,ServicoComponenteService,CompraService,OrdemService]
})
export class CoreModule{}