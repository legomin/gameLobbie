var app = angular.module('myApp', [
    'btford.modal'
]);

app.factory('myModal', function (btfModal) {
    return btfModal({
        controller: 'MyModalCtrl',
        controllerAs: 'modal',
        templateUrl: 'authtorization.html'
    });
}).

controller('MyModalCtrl', function ($scope, $timeout, myModal) {

    var ctrl = this;

    ctrl.closeMe = function () {
        sendMessage('login');
        myModal.deactivate();
    };

});

app.factory('regModal', function (btfModal) {
    return btfModal({
        controller: 'RegModalCtrl',
        controllerAs: 'modal1',
        templateUrl: 'registration.html'
    });
}).

controller('RegModalCtrl', function ($scope, $timeout, regModal) {

    var ctrl = this;

    ctrl.closeMe = function () {
        sendMessage('registration');
        regModal.deactivate();
    };

});

// main controller
app.controller('mainCtrl', function (regModal,myModal,$scope,$window) {
    connect();
    this.showAuth = myModal.activate;
    this.showRegistration = regModal.activate;


});

function showUsers(incomeData) {
    var users = document.getElementById('players');

    var lies =  users.childNodes.length;
    for (var i = 0; i < lies; i++) {
        users.removeChild(users.childNodes[0]);
    }
    var user;
    //var incomeData = JSON.parse(message.data.users);
    for (var i = 0; i < incomeData.length; i++) {
        user = document.createElement('li');
        user.appendChild(document.createTextNode(incomeData[i]));
        users.appendChild(user);
    }
}