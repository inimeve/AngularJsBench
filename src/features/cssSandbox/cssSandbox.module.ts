import angular = require("angular");

import "./cssSandbox.scss";

import { CssSandboxComponent } from "./cssSandbox.component";
import { CssSandboxConfig } from "./cssSandbox.config";

const MODULE_NAME: string = "cssSandboxModule";

const MODULE_DEPENDENCIES: string[] = [];

export const CssSandboxModule = angular.module(MODULE_NAME, MODULE_DEPENDENCIES)
    .component(CssSandboxComponent.NAME, new CssSandboxComponent())
    .config(CssSandboxConfig.routeConfig)
    .name;
