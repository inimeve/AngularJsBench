import angular = require("angular");
import {Grid} from 'ag-grid-community';
import { initialiseAgGridWithAngular1 } from "ag-grid-community";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import "./table.css";

import { TableConfig } from "./table.config";
import { TableComponent } from "./table.component";

const MODULE_NAME: string = "tableModule";

const MODULE_DEPENDENCIES: string[] = [
    'agGrid'
];

initialiseAgGridWithAngular1(angular);

export const TableModule = angular.module(MODULE_NAME, MODULE_DEPENDENCIES)
    .component(TableComponent.NAME, new TableComponent())
    .config(TableConfig.routeConfig)
    .name;
