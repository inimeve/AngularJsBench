import { StateProvider } from "@uirouter/angularjs";
import { HomeComponent } from "./home.component";

export class HomeConfig {

    private static $inject = ['$stateProvider'];

    constructor() {}

    public static routeConfig($stateProvider: StateProvider): void {
        $stateProvider
            .state('home', {
                url: '/home',
                component: HomeComponent.NAME
            });
    }

}



