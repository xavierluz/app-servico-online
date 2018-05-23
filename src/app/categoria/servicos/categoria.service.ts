import { CategoriaModel } from "../model/categoria.model";

export class CategoriaService{
    constructor(){}

     _categorias:CategoriaModel[] =[
         {
            id:'1',
            nome:'Xampus',
            descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            id:'2',
            nome:'Condicionador',
            descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         },
         {
            id:'1',
            nome:'Xampus',
            descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            id:'2',
            nome:'Condicionador',
            descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         },
         {
            id:'1',
            nome:'Xampus',
            descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            id:'2',
            nome:'Condicionador',
            descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         },
         {
            id:'1',
            nome:'Xampus',
            descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            id:'2',
            nome:'Condicionador',
            descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         },
         {
            id:'1',
            nome:'Xampus',
            descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            id:'2',
            nome:'Condicionador',
            descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         },
         {
            id:'1',
            nome:'Xampus',
            descricao:'em a finalidade de cuidar do cabelo, e consiste em um produto utilizado principalmente para remover óleo do cabelo, sujeira, pele morta do couro cabeludo que se agregam ao cabelo com o tempo',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/xampu.jpg'
        
         },
         {
            id:'2',
            nome:'Condicionador',
            descricao:'produto usado nos cabelos, após o uso do shampoo em um banho, para equilibrar o pH dos fios. É também usado para hidratar e condicionar água nas madeixas, com aromas interessantes e funções cada vez mais variadas como, devolver nutrientes ao cabelo, proteínas e várias outras',
            status:'AT',
            caminhoImage:'../assets/img/categoria/xampu-condicionador/condicionador.jpg'
         }]

    
    categorias():CategoriaModel[]{
        return this._categorias;
    }
}