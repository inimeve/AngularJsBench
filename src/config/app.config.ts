import uirouter, { UrlService } from "@uirouter/angularjs";
import { MinimalButtonModule } from "minimal-button";

import { HomeModule } from "../features/home/home.module";
import { TableModule } from "../features/table/table.module";
import { TreeModule } from "../features/tree/tree.module";
import { AppUtilsService } from "../app.utils";

export class AppConfig {

    private static $inject = ['$urlServiceProvider'];

    constructor() {}

    public static routeConfig($urlServiceProvider: UrlService) {
        $urlServiceProvider.config.hashPrefix('');
        $urlServiceProvider.rules.otherwise('/home');
    }

    public static resolveModules(): string[] {
        let coreModules: string[] = [
            uirouter,
            'agGrid'
        ];
        
        let externalComponentModules: string[] = [
            MinimalButtonModule
        ];
        
        let featureModules: string[] = [
            HomeModule,
            TableModule,
            TreeModule
        ];
        
        let globalServices: string[] = [
            AppUtilsService
        ];
    
        return coreModules.concat(externalComponentModules).concat(featureModules).concat(globalServices);
    }

}