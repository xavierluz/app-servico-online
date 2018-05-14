import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-create',
  templateUrl: './servico-create.component.html',
  styleUrls: ['./servico-create.component.css']
})
export class ServicoCreateComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit(){
      this.dropdownList = [
                            {"id":1,"itemName":"Xampu Loreal Ceramidas"},
                            {"id":2,"itemName":"Hidratante Dove"},
                            {"id":3,"itemName":"Máscra Loreal"},
                            {"id":4,"itemName":"Alisamento Nultri"}
                          ];
      this.selectedItems = [
                              //{"id":2,"itemName":"Singapore"},
                              //{"id":3,"itemName":"Australia"},
                              //{"id":4,"itemName":"Canada"},
                              //{"id":5,"itemName":"South Korea"}
                          ];
      this.dropdownSettings = { 
                                singleSelection: false, 
                                text:"Selecione produto(s)",
                                selectAllText:'Selecionar Todos',
                                unSelectAllText:'Deselecionar Todos',
                                enableSearchFilter: true,
                                classes:"myclass custom-class"
                              };            
  }
  onItemSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any){
      console.log(items);
  }
  onDeSelectAll(items: any){
      console.log(items);
  }
 
}
