import { IComponentOptions } from "angular";
import { TableController } from "./table.controller";

export class TableComponent implements IComponentOptions{

    static NAME = 'tableComponent';

    bindings:  {[boundProperty: string]: string} = {};

    template: string = require('./table.html');

    controller: any = TableController;

}