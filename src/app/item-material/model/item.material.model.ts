import { CategoriaModel } from "../../categoria/model/categoria.model";
import { ClassificacaoModel } from "../../classificacao/model/classificao.model";


export interface ItemMaterialModel{
  Id:string;
  Nome:string;
  Descricao:string;
  CategoriaId:string;
  CategoriaModel:CategoriaModel;
  ClassificacaoId:number;
  ClassificacaoModel:ClassificacaoModel;

}
