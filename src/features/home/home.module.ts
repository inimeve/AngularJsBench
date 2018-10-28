import angular = require("angular");

import "./home.css";

import { HomeConfig } from "./home.config";
import { HomeComponent } from "./home.component";

import randomNames from '../../services/randomNames.service';
import greeting from '../../directives/greeting.directive';


const MODULE_NAME: string = "homeModule";

const MODULE_DEPENDENCIES: string[] = [
    randomNames,
    greeting
];


export const HomeModule = angular.module(MODULE_NAME, MODULE_DEPENDENCIES)
    .component(HomeComponent.NAME, new HomeComponent())
    .config(HomeConfig.routeConfig)
    .name;
