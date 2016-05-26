// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('brewbox', ['ionic', 'brewbox.controllers', 'brewbox.services', 'brewbox.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('auth', {
    url: '/auth',
    abstract: true,
    templateUrl: 'templates/auth.html',
    controller: 'AppCtrl'
  })

  .state('auth.login', {
    url: '/login', //   #/app/search
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-login.html'
      }
    }
  })
  .state('auth.register', {
    url: '/register', //   #/app/search
    views: {
      'tab-register': {
        templateUrl: 'templates/tab-register.html'
      }
    }
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.polls', {
    url: '/polls', //   #/app/search
    views: {
      'menuContent': {
        templateUrl: 'templates/polls.html'
      }
    }
  })

  .state('app.poll', {
    url: '/polls/:pollsId',
    views: {
      'menuContent': {
        templateUrl: 'templates/poll.html',
      }
    }
  })

  .state('app.answers', {
    url: '/answers',
    views: {
      'menuContent': {
        templateUrl: 'templates/answers.html'
      }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/polls');
});
