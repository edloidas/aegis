/**
 * AEGIS
 * @author edloidas
 * @link http://edloidas.github.io/aegis
 */

var aegis = angular.module( 'aegis', [] );

aegis.controller( 'AegisController', function ( $scope, $http ) {

    $scope.title = {
        main:  "AegiS",
        index: "corp."
    };

    $scope.fingerprint = "enter id";

    $scope.active = "";

    $scope.activate = function () {
        $scope.active = $scope.active ? "" : "active";
    }
});

function sel(selector) {
    return angular.element(document.querySelector(selector));
}
