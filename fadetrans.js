var app = angular.module('ngSimpleTicker', []);

app.controller('messagesController', ['$scope',
    function ($scope) {

        /*
       $scope.$watch('activeMsg', function() {
           alert('activeMsg has changed!');
       });
       */

        $scope.setVisible = function(index) {

            console.log("index:" + index) ;

            if (index == $scope.activeMsg) {
                return("1") ;
            } else {
                return("0") ;
            }
        }


        $scope.refresh = function() {

            console.log("refresh") ;
            console.log("Active Message = " + $scope.activeMsg) ;
            console.log("Max messages = " +  $scope.msgs.length) ;



            $scope.$apply(function() {
                    $scope.activeMsg++ ;

                    if ($scope.activeMsg >= $scope.msgs.length) {
                        $scope.activeMsg = 0 ;
                    }
                }
            )

        }

        setInterval($scope.refresh,1000) ;

    }

]);

app.directive("ticker", function() {

    return {
        restrict: "E",
        template: "<div><ul><li ng-style="{display:setVisible($index)}" data-ng-repeat="msgObj in msgs track by $index">{{msgObj.msg}}</li></ul></div>"

    }
})



function messagesController ($scope,$http) {

    $scope.setVisible = function(index) {

        console.log("index:" + index) ;

        if (index == $scope.activeMsg) {
            return("initial") ;
        } else {
            return("none") ;
        }
    }


    $scope.refresh = function() {

        console.log("refresh") ;
        console.log("Active Message = " + $scope.activeMsg) ;
        console.log("Max messages = " +  $scope.msgs.length) ;

        $scope.activeMsg++ ;

        if ($scope.activeMsg >= $scope.msgs.length) {
             $scope.activeMsg = 0 ;
        }
    }

 setInterval($scope.refresh,10000) ;


}
