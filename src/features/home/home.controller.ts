import { AppUtils } from "../../app.utils";


export class HomeController {

    static NAME = 'HomeController';

    private static $inject: string[] = ['appUtils'];

    
    constructor(private appUtils: AppUtils) {}

}