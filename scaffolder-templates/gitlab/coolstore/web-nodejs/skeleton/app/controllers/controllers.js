'use strict';

angular.module('app')

    .controller("HomeController",
        ['$scope', '$http', '$filter', '$timeout', 'COOLSTORE_CONFIG', /*'Notifications',*/ 'catalog', 'Auth',
            function ($scope, $http, $filter, $timeout, COOLSTORE_CONFIG, /*Notifications,*/ catalog, $auth) {

                $scope.products = [];

                $scope.isLoggedIn = function () {
                    return $auth.loggedIn;
                };
                $scope.ssoEnabled = function () {
                    return $auth.ssoEnabled;
                };

                $scope.login = function () {
                    $auth.login();
                };

                function refreshProducts () {
                    // initialize products
                    catalog.getProducts().then(function (data) {
                        if (data.error != undefined && data.error != "") {
                            // Notifications.error("Error retrieving products: " + data.error);
                            return;
                        }
                        $scope.products = data
                            .sort(function (p1, p2) {
                                return parseInt(p1.itemId) > parseInt(p2.itemId) ? 1 : -1
                            })
                            .map(function (el) {
                                return {
                                    quantity: "1",
                                    product: el
                                }
                            })
                        
                    }, function (err) {
                        // Notifications.error("Error retrieving products: " + err.statusText);
                    })
                    .finally(function () {
                        $timeout(function () {
                            refreshProducts()
                        }, COOLSTORE_CONFIG.PRODUCT_REFRESH_INTERVAL)
                    });
                }

                refreshProducts()
            }])

    .controller("HeaderController",
        ['$scope', '$location', '$http', 'Auth',
            function ($scope, $location, $http, $auth) {
                $scope.userInfo = $auth.userInfo;

                $scope.cartTotal = 0.0;
                $scope.itemCount = 0;

                $scope.isLoggedIn = function () {
                    return $auth.loggedIn;
                };

                $scope.login = function () {
                    $auth.login();
                };
                $scope.logout = function () {
                    $auth.logout();
                };
                $scope.isLoggedIn = function () {
                    return $auth.loggedIn;
                };
                $scope.ssoEnabled = function () {
                    return $auth.ssoEnabled;
                };
                $scope.profile = function () {
                    $auth.authz.accountManagement();
                };

                $scope.$watch(function () {
                    return $auth.userInfo;
                }, function (newValue) {
                    $scope.userInfo = newValue;
                });

                $scope.isActive = function (loc) {
                    return loc === $location.path();
                }
            }]);
