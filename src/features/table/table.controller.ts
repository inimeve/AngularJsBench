import { GridOptions, ICellRenderer } from "ag-grid-community";

export class TableController {

    static NAME = 'TableController';

    public simpleGridOptions1: GridOptions;

    public simpleGridOptions2: GridOptions;

    public simpleGridOptions3: GridOptions;

    public simpleGridOptions4: GridOptions;

    public simpleGridOptions5: GridOptions;

    private static $inject: string[] = [];

    constructor() {}

    $onInit() {
        this.configSimpleTable();

    }

    private configSimpleTable = () => {
        var columnDefs = [
            {headerName: "Key", field: "key"},
            {headerName: "Name", field: "name"},
            {headerName: "Code", field: "code"}
        ];
    
        var rowData = [{key:"chelsea",name:"Chelsea",code:"CHE"},{key:"arsenal",name:"Arsenal",code:"ARS"},{key:"tottenham",name:"Tottenham Hotspur",code:"TOT"},{key:"westham",name:"West Ham United",code:"WHU"},{key:"crystalpalace",name:"Crystal Palace",code:"CRY"},{key:"manutd",name:"Manchester United",code:"MUN"},{key:"mancity",name:"Manchester City",code:"MCI"},{key:"everton",name:"Everton",code:"EVE"},{key:"liverpool",name:"Liverpool",code:"LIV"},{key:"westbrom",name:"West Bromwich Albion",code:"WBA"},{key:"newcastle",name:"Newcastle United",code:"NEW"},{key:"stoke",name:"Stoke City",code:"STK"},{key:"southampton",name:"Southampton",code:"SOU"},{key:"leicester",name:"Leicester City",code:"LEI"},{key:"bournemouth",name:"Bournemouth",code:"BOU"},{key:"watford",name:"Watford",code:"WAT"},{key:"brightonhovealbion",name:"Brighton & Hove Albion",code:null},{key:"burnley",name:"Burnley",code:"BUR"},{key:"huddersfieldtown",name:"Huddersfield Town",code:null},{key:"swansea",name:"Swansea",code:"SWA"}];

        this.simpleGridOptions1 = {
            columnDefs: columnDefs,
            rowData: rowData,
            enableSorting: true,
            onGridReady: () => {
                this.simpleGridOptions1.api.sizeColumnsToFit();
            }
        };
        
        this.simpleGridOptions2 = {
            columnDefs: columnDefs,
            rowData: rowData,
            // suppressHorizontalScroll: true,
            defaultColDef: {
                width: 500,
                editable: true,
                filter: 'agTextColumnFilter'
            },
            onGridReady: () => {
            }
        };

        this.simpleGridOptions3 = {
            columnDefs: columnDefs,
            rowData: rowData,
            onGridReady: () => {
                this.simpleGridOptions3.api.sizeColumnsToFit();
                this.simpleGridOptions3.api.setDomLayout('autoHeight');
            }
        };

        var columnDefs4 = [
            {headerName: "Key", field: "key"},
            {headerName: "Name", field: "name", cellRenderer: "nameCellRenderer"},
            {headerName: "Code", field: "code"},
            {headerName: "Rendered", field: "rendered", cellRenderer: "testCellRenderer"},
        ];

        var rowData4 = [
            { key: "chelsea", name: "Chelsea", code: "CHE" , rendered: "4"},
            { key: "arsenal", name: "Arsenal", code: "ARS" , rendered: "3"},
            { key: "tottenham", name: "Tottenham Hotspur", code: "TOT" , rendered: "4"},
            { key: "westham", name: "West Ham United", code: "WHU" , rendered: "1"},
            { key: "crystalpalace", name: "Crystal Palace", code: "CRY" , rendered: "4"},
            { key: "manutd", name: "Manchester United", code: "MUN" , rendered: "7"},
            { key: "mancity", name: "Manchester City", code: "MCI" , rendered: "5"},
            { key: "everton", name: "Everton", code: "EVE" , rendered: "4"},
            { key: "liverpool", name: "Liverpool", code: "LIV" , rendered: "5"},
            { key: "westbrom", name: "West Bromwich Albion", code: "WBA" , rendered: "4"},
            { key: "newcastle", name: "Newcastle United", code: "NEW" , rendered: "5"},
            { key: "stoke", name: "Stoke City", code: "STK" , rendered: "4"},
            { key: "southampton", name: "Southampton", code: "SOU" , rendered: "2"},
            { key: "leicester", name: "Leicester City", code: "LEI" , rendered: "4"},
            { key: "bournemouth", name: "Bournemouth", code: "BOU" , rendered: "2"},
            { key: "watford", name: "Watford", code: "WAT" , rendered: "1"},
            { key: "brightonhovealbion", name: "Brighton & Hove Albion", code: null , rendered: "4"},
            { key: "burnley", name: "Burnley", code: "BUR" , rendered: "2"},
            { key: "huddersfieldtown", name: "Huddersfield Town", code: null , rendered: "0"},
            { key: "swansea", name: "Swansea", code: "SWA", rendered: "4" }
          ];
          ;

        this.simpleGridOptions4 = {
            columnDefs: columnDefs4,
            rowData: rowData4,
            pagination: true,
            // paginationAutoPageSize: true,
            paginationPageSize: 15,
            components: {
                'testCellRenderer': TestCellRenderer,
                'nameCellRenderer': NameCellRenderer
            },
            onGridReady: () => {
                this.simpleGridOptions4.api.sizeColumnsToFit();
                this.simpleGridOptions4.api.setDomLayout('autoHeight');
            }
        };

        this.simpleGridOptions5 = {
            columnDefs: columnDefs,
            rowData: rowData,
            onGridReady: () => {
                this.simpleGridOptions5.api.sizeColumnsToFit();
            }
        };
    };

}

class TestCellRenderer implements ICellRenderer {
    public eGui: HTMLElement;
    public eValue: any;
    
    public init(params) {
        this.eValue = params.value;
        this.eGui = document.createElement('span');

        let text = "";
        for(let i = 0; i < this.eValue; i++) {
            text += '#';
        }
        this.eGui.innerHTML = text;
    };
    
    public getGui() {
        return this.eGui;
    };
    
    public refresh(params): boolean {
        return params.value;
    };
    
    public destroy() {
        // do cleanup, remove event listener from button
    };
}

class NameCellRenderer implements ICellRenderer {
    public eGui: HTMLElement;
    public eValue: any;
    
    public init(params) {
        this.eValue = params.value;
        this.eGui = document.createElement('span');

        let text = this.eValue + " ";
        for(let i = 0; i < this.eValue.length; i++) {
            text += '#';
        }
        this.eGui.innerHTML = text;
    };
    
    public getGui() {
        return this.eGui;
    };
    
    public refresh(params): boolean {
        return params.value;
    };
}