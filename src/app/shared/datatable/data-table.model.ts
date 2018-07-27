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
  funcaoId:string;
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