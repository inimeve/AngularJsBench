// style imports
import 'bootstrap/dist/css/bootstrap.css';
import './app.base.css';

// Main imports
import * as angular from "angular";
import { initialiseAgGridWithAngular1 } from 'ag-grid-community';

// App configuration
import { AppConfig } from './config/app.config';

initialiseAgGridWithAngular1(angular);

angular.module('app', AppConfig.resolveModules())
    .config(AppConfig.routeConfig);
