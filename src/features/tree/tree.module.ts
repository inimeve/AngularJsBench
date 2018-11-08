import angular = require("angular");

import "./tree.scss";

import { TreeConfig } from "./tree.config";
import { TreeComponent } from "./tree.component";

const MODULE_NAME: string = "tableModule";

const MODULE_DEPENDENCIES: string[] = [];

export const TreeModule = angular.module(MODULE_NAME, MODULE_DEPENDENCIES)
    .component(TreeComponent.NAME, new TreeComponent())
    .config(TreeConfig.routeConfig)
    .name;
