/*
 * Proof-of-Concept Angular Controller
 */

var myApp = angular.module("actionsApp", ["ui"])
    .directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit('ngRepeatFinished');
                    });
                }
            }
        }
    })
    .controller("actionsController", function($scope, $http) {
        $http
            .get("../data/actions.json")
            .success(function(data) {
                $scope.actions = data.actions;
            })
            .error(function(data) {
                console.log("Error while processing course data!");
            });
        
        $scope.$on("ngRepeatFinished", function(ngRepeatFinishedEvent) {
            $("p").expander({
                slicePoint: 200,
                expandEffect: "fadeIn",
                collapseEffect: "fadeOut"
            });
        });
    });
