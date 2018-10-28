import { StateService } from "@uirouter/core";


export class HomeController {

    static NAME = 'HomeController';

    private static $inject: string[] = ['$state', 'randomNames'];

    
    constructor(private $state: StateService, private randomNames: any) {}

    public helloWorld = (): void => {
        console.log('HELLO WORLD!!');
    };

}