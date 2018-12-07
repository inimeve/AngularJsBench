import { StateProvider } from "@uirouter/angularjs";
import { CssSandboxComponent } from "./cssSandbox.component";

export class CssSandboxConfig {

    private static $inject = ['$stateProvider'];

    constructor() {}

    public static routeConfig($stateProvider: StateProvider): void {
        $stateProvider
            .state('cssSandbox', {
                url: '/cssSandbox',
                component: CssSandboxComponent.NAME
            });
    }

}



