import uirouter, { UrlService } from "@uirouter/angularjs";
import { MinimalButtonModule } from "minimal-button";
import { HomeModule } from "../features/home/home.module";

export class AppConfig {

    private static $inject = ['$urlServiceProvider'];

    constructor() {}

    public static routeConfig($urlServiceProvider: UrlService) {
        $urlServiceProvider.config.hashPrefix('');
        $urlServiceProvider.rules.otherwise('/home');
    }

    public static resolveModules(): string[] {
        let coreModules: string[] = [
            uirouter
        ];
        
        let externalComponentModules: string[] = [
            MinimalButtonModule
        ];
        
        let featureModules: string[] = [
            HomeModule
        ];
    
        return coreModules.concat(externalComponentModules).concat(featureModules);
    }

}