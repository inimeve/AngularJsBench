import { UrlService } from "@uirouter/angularjs";

routing.$inject = ['$urlServiceProvider'];

export default function routing($urlServiceProvider: UrlService) {
  $urlServiceProvider.config.hashPrefix('');
  $urlServiceProvider.rules.otherwise('/home');
}