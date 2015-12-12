angular.module("twitterClone", ['angular-meteor', 'ionic']);

angular.module("twitterClone").controller("LoginController", function($scope){
    $scope.login = true;
    $scope.register = function(user){
        //later I change the schema
        Accounts.createUser(user, function(){
            console.log('registrado');
        });
    }

    $scope.logIn = function(user){
        Meteor.loginWithPassword(user.email, user.password, function(error){
            console.log(error);
        });
    }

    $scope.showLogin = function(){
        $scope.login = true;
        $scope.userLogin = {};
    }

    $scope.showRegister = function(){
        $scope.login = false;
        $scope.user = {};
    }
});
