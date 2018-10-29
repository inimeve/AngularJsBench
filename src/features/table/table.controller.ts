import { GridOptions, Grid } from "ag-grid-community";

export class TableController {

    static NAME = 'TableController';

    public simpleGridOptions: GridOptions;

    private static $inject: string[] = [];

    constructor() {}

    $onInit() {
        this.configSimpleTable();

    }

    private configSimpleTable = () => {
        var columnDefs = [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}
        ];
    
        var rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ];

        this.simpleGridOptions = {
            columnDefs: columnDefs,
            rowData: rowData
        };
    };

}