import { GridOptions, ICellRenderer } from "ag-grid-community";

export class TreeController {

    static NAME = 'TreeController';

    public simpleGridOptions: GridOptions;

    private static $inject: string[] = [];

    constructor() {}

    $onInit() {
        this.configSimpleTable();
    }

    private configSimpleTable = () => {
        var columnDefs = [
            {headerName: "Key", field: "key", cellRenderer: "group", group: true},
            {headerName: "Name", field: "name"},
            {headerName: "Code", field: "code"}
        ];
    
        var rowData = [
            { key: "chelsea", name: "Chelsea", code: "CHE", group: true, children: [{ key: "chelsea", name: "Chelsea", code: "CHE"}]},
            { key: "arsenal", name: "Arsenal", code: "ARS" },
            { key: "tottenham", name: "Tottenham Hotspur", code: "TOT" },
            { key: "westham", name: "West Ham United", code: "WHU" },
            { key: "crystalpalace", name: "Crystal Palace", code: "CRY" },
            { key: "manutd", name: "Manchester United", code: "MUN" },
            { key: "mancity", name: "Manchester City", code: "MCI" },
            { key: "everton", name: "Everton", code: "EVE" },
            { key: "liverpool", name: "Liverpool", code: "LIV" },
            { key: "westbrom", name: "West Bromwich Albion", code: "WBA" },
            { key: "newcastle", name: "Newcastle United", code: "NEW" },
            { key: "stoke", name: "Stoke City", code: "STK" },
            { key: "southampton", name: "Southampton", code: "SOU" },
            { key: "leicester", name: "Leicester City", code: "LEI" },
            { key: "bournemouth", name: "Bournemouth", code: "BOU" },
            { key: "watford", name: "Watford", code: "WAT" },
            { key: "brightonhovealbion", name: "Brighton & Hove Albion", code: null },
            { key: "burnley", name: "Burnley", code: "BUR" },
            { key: "huddersfieldtown", name: "Huddersfield Town", code: null },
            { key: "swansea", name: "Swansea", code: "SWA" }
        ];
          

        this.simpleGridOptions = {
            columnDefs: columnDefs,
            rowData: rowData,
            enableSorting: true,
            groupMultiAutoColumn: true,
            onGridReady: () => {
                this.simpleGridOptions.api.sizeColumnsToFit();
            },
            getNodeChildDetails: function(data) {
                if (data.children) {
                  console.log(data);
                  return {
                    group: true,
                    children: data.children,
                    // expanded: data.open
                  };
                } else {
                  return null;
                }
              },
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