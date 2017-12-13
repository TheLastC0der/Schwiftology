import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import AccountService from './services/services'

    let app = angular.module('starterkit', [uirouter, ngResource]);
    app.config(routing);
    app.service('accountService', AccountService);
    routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function routing($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
          .state('home', {
              url: '/',
              templateUrl: '/ngApp/home.html'
          })

          })
          .state('public', {
              url: '/public',
              templateUrl: '/ngApp/public.html'
          })
          .state('login', {
              url: '/login',
              templateUrl: '/ngApp/login.html'
          });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    }


    config.$inject = ['$rootScope', '$state', 'accountService'];
        function config($rootScope, $state, accountService) {
                $rootScope.$on('$stateChangeStart', (e, to) => {
                    // protect non-public views
                    if (to.data && to.data.requiresAuthentication) {
                        if (!accountService.isLoggedIn()) {
                            e.preventDefault();
                            $state.go('login');
                        }
                    }
                });
        }
        angular.module('MyApp').run(config);
