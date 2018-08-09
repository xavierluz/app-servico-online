import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "../shared/rating/rating.component";

import { OrdemService } from "../ordem-pagamento/servico/ordem.service";
import { CategoriaService } from "../categoria/servicos/categoria.service";
import { ClienteService } from "../cliente/servico/cliente.service";
import { ItemMaterialService } from "../item-material/servico/item.material.service";
import { TipoServicoService } from "../tipo-servico/servico/tipo.servico.service";
import { ServicoService } from "../servico/servico/servico.service";
import { PagerService } from "../paginacao/pagina-service";
import { ServicoComponenteService } from "../servico/servico/servico-componente.service";
import { CompraService } from "../compra/servico/compra.service";
import { SnackbarComponent } from './snackbar/snackbar.component';
import { NotificationService } from "../mensagem/notification.service";
import { ModalBoostrapComponent } from './modal-boostrap/modal-boostrap.component';

@NgModule({
    declarations:[InputComponent,RadioComponent,RatingComponent, SnackbarComponent, ModalBoostrapComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, SnackbarComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule, ModalBoostrapComponent]
})
export class SharedModule{
    static forRoot():ModuleWithProviders{
        return{
            ngModule:SharedModule,
            providers:[CategoriaService,ClienteService,ItemMaterialService,TipoServicoService,ServicoService,PagerService,ServicoComponenteService,CompraService,OrdemService,NotificationService]
        }
    }

}