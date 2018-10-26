import { StateProvider } from '@uirouter/angularjs';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider: StateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}