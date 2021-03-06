import { EmpresaUsuarioFuncaoModel } from "../empresa-usuario/empresa-usuario-funcao.model";

class DataTablesResponse {
  data: any[];
  draw: number;
  start: number;
  length: number;
  recordsFiltered: number;
  recordsTotal: number;

  Order: DataTableOrder;
  Columns: DataTableColumn;
  Search: DataTableSearch;
  empresaUsuarioFuncao: EmpresaUsuarioFuncaoModel;
}
class DataTableOrder {
  column: number;
  dir: string;
}

class DataTableColumn {
  data: string;
  name: string;
  searchable: boolean;
  orderable: boolean;

  search: DataTableSearch;
}
class DataTableSearch {
  value: string;
  regex: boolean;
}
export { DataTablesResponse, DataTableOrder, DataTableColumn, DataTableSearch }