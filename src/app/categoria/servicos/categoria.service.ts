import { CategoriaModel } from "../model/categoria.model";

export class CategoriaService{
    constructor(){}

     _categorias:CategoriaModel[] =[
         {
            Id:'1',
            Nome:'Xampus',
            Descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            Id:'2',
            Nome:'Condicionador',
            Descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         },
         {
            Id:'1',
            Nome:'Xampus',
            Descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            Id:'2',
            Nome:'Condicionador',
            Descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         },
         {
            Id:'1',
            Nome:'Xampus',
            Descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            Id:'2',
            Nome:'Condicionador',
            Descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         },
         {
            Id:'1',
            Nome:'Xampus',
            Descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            Id:'2',
            Nome:'Condicionador',
            Descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         },
         {
            Id:'1',
            Nome:'Xampus',
            Descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            Id:'2',
            Nome:'Condicionador',
            Descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         },
         {
            Id:'1',
            Nome:'Xampus',
            Descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            Id:'2',
            Nome:'Condicionador',
            Descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            Status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         }]

    
    categorias():CategoriaModel[]{
        return this._categorias;
    }
}