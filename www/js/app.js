// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

// create calculator controler
app.controller('calcCtrl', function($scope, $ionicPopup, $timeout){
  // why use this?
  $scope.data = {};
  // add function
  $scope.add = function(){
    $scope.result = 0;
    $scope.result=parseInt($scope.firstNumber)+ parseInt($scope.secondNumber);

    // custom popup
    var mypop = $ionicPopup.alert({
      title: 'Result',
      template: '{{result}}',
      scope: $scope
    });
    // timeout
    // close the popup after 3 seconds
    $timeout(function(){
      mypop.close();
    }, 3000);
  };
  // subtract function
  $scope.subtract = function(){
    $scope.result = 0;
    $scope.result=parseInt($scope.firstNumber)- parseInt($scope.secondNumber);

    // custom popup
    var mypop = $ionicPopup.alert({
      title: 'Result',
      template: '{{result}}',
      scope: $scope
    });
    // timeout
    // close the popup after 3 seconds
    $timeout(function(){
      mypop.close();
    }, 3000);
  };
  // multiply function
  $scope.multiply = function(){
    $scope.result = 0;
    $scope.result=parseInt($scope.firstNumber)* parseInt($scope.secondNumber);

    // custom popup
    var mypop = $ionicPopup.alert({
      title: 'Result',
      template: '{{result}}',
      scope: $scope
    });
    // timeout
    // close the popup after 3 seconds
    $timeout(function(){
      mypop.close();
    }, 3000);
  };
  // divide function
  $scope.divide = function(){
    $scope.result = 0;
    $scope.result=parseInt($scope.firstNumber)/ parseInt($scope.secondNumber);

    // custom popup
    var mypop = $ionicPopup.alert({
      title: 'Result',
      template: '{{result}}',
      scope: $scope
    });
    // timeout
    // close the popup after 3 seconds
    $timeout(function(){
      mypop.close();
    }, 3000);
  };
});
