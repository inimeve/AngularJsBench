import { StateProvider } from "@uirouter/angularjs";
import { TreeComponent } from "./tree.component";

export class TreeConfig {

    private static $inject = ['$stateProvider'];

    constructor() {}

    public static routeConfig($stateProvider: StateProvider): void {
        $stateProvider
            .state('tree', {
                url: '/tree',
                component: TreeComponent.NAME
            });
    }

}



