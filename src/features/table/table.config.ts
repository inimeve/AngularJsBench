import { StateProvider } from "@uirouter/angularjs";
import { TableComponent } from "./table.component";

export class TableConfig {

    private static $inject = ['$stateProvider'];

    constructor() {}

    public static routeConfig($stateProvider: StateProvider): void {
        $stateProvider
            .state('table', {
                url: '/table',
                component: TableComponent.NAME
            });
    }

}



