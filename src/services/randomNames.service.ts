import * as angular from 'angular';

class RandomNames {

    private names: string[];

    constructor() {
        this.names = ['John', 'Elisa', 'Annie'];
    }

    private getName() {
        const totalNames = this.names.length;
        const randomNumber = Math.floor(Math.random() * totalNames);
        return this.names[randomNumber];
    }
}

export default angular.module('services.random-names', [])
    .service('randomNames', RandomNames)
    .name;