// style imports
import 'bootstrap/dist/css/bootstrap.css';
import './app.base.css';

// Main imports
import * as angular from "angular";
import uirouter from "@uirouter/angularjs";

// Routing configuration
import routing from "./config/routing.config";

// Root feature module
import home from './features/home';

// External components
import {MinimalButtonModule} from "minimal-button";


angular.module('app', resolveModules())
    .config(routing);


function resolveModules(): string[] {

    let coreModules: string[] = [
        uirouter
    ];
    
    let externalComponentModules: string[] = [
        MinimalButtonModule
    ];
    
    let featureModules: string[] = [
        home
    ];

    return coreModules.concat(externalComponentModules).concat(featureModules);
}
