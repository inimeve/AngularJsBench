import angular = require("angular");

import "./ag-my-theme.scss";
import "./table.scss";

import { TableConfig } from "./table.config";
import { TableComponent } from "./table.component";

const MODULE_NAME: string = "tableModule";

const MODULE_DEPENDENCIES: string[] = [];

export const TableModule = angular.module(MODULE_NAME, MODULE_DEPENDENCIES)
    .component(TableComponent.NAME, new TableComponent())
    .config(TableConfig.routeConfig)
    .name;
