import { IComponentOptions } from "angular";
import { CssSandboxController } from "./cssSandbox.controller";

export class CssSandboxComponent implements IComponentOptions{

    static NAME = 'cssSandboxComponent';

    bindings:  {[boundProperty: string]: string} = {};

    template: string = require('./cssSandbox.html');

    controller: any = CssSandboxController;

}