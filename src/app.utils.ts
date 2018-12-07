import angular = require("angular");
import { StateService } from "@uirouter/core";

export class AppUtils {

    static NAME: string = 'appUtils';

    private $inject: string[] = ['$state'];

    constructor(private $state: StateService) {}

    public goToWindow = (stateName: string):void => {
        this.$state.go(stateName, {});
    };

}

export const AppUtilsService = angular.module('services.app-utils', [])
    .service(AppUtils.NAME, AppUtils)
    .name;