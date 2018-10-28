// style imports
import 'bootstrap/dist/css/bootstrap.css';
import './app.base.css';

// Main imports
import * as angular from "angular";

// App configuration
import { AppConfig } from './config/app.config';

angular.module('app', AppConfig.resolveModules())
    .config(AppConfig.routeConfig);
