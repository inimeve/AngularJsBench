import { IComponentOptions } from "angular";
import { TreeController } from "./tree.controller";

export class TreeComponent implements IComponentOptions{

    static NAME = 'treeComponent';

    bindings:  {[boundProperty: string]: string} = {};

    template: string = require('./tree.html');

    controller: any = TreeController;

}