var routerApp = angular.module('routerApp', ['ui.router']);
  
  routerApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    $urlRouterProvider.otherwise('/home');
      
    $stateProvider
          
          // HOME STATES AND NESTED VIEWS 
          .state('home', {
              url: '/home',
              templateUrl: '/html/home.html'
          })
          .state('drafts', {
              url: '/drafts',
              templateUrl: '/html/drafts.html'
          })
          .state('articles', {
            url: '/articles',
            templateUrl: '/html/articles.html'
        })
        .state('faqs', {
            url: '/faqs',
            templateUrl: '/html/faqs.html'
        })
        .state('elections', {
            url: '/elections',
            templateUrl: '/html/elections.html'
        })
        .state('cdd', {
            url: '/cdd',
            templateUrl: '/html/cdd.html'
        })
        .state('meetings', {
            url: '/meetings',
            templateUrl: '/html/meetings.html'
        })
        .state('about-movement', {
            url: '/about-movement',
            templateUrl: '/html/about-movement.html'
        })
        .state('about-party', {
            url: '/about-party',
            templateUrl: '/html/about-party.html'
        })
        .state('about-president', {
            url: '/about-president',
            templateUrl: '/html/about-president.html'
        })
          .state('contact-us', {
              url: '/contact-us',
              templateUrl: '/html/contact-us.html'
          })   ;  
    $locationProvider.html5Mode(true);    
  
        });
  