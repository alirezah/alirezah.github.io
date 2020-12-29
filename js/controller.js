/*
 * Proof-of-Concept Angular Controller
 */

var myApp = angular.module('actionsApp', ['ui'])
    .controller('actionsController', function($scope, $http) {
        const actionsUrl = 'https://cors-anywhere.herokuapp.com/https://alirezah.github.io/json/sample_actions.json'
        $http
            .get(actionsUrl)
            .success(function(data) {
                $scope.actions = data.actions
            })
            .error(function(data) {
                console.log('Error while processing course data!')
            })
    });
