import { IComponentOptions } from "angular";
import { HomeController } from "./home.controller";

export class HomeComponent implements IComponentOptions{

    static NAME = 'homeComponent';

    bindings:  {[boundProperty: string]: string} = {};

    template: string = require('./home.html');

    controller: any = HomeController;

}