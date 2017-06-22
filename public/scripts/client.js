var app = angular.module('myApp', []);

app.controller('BoredBoard', function(MesService) {
  var vm = this;
  var uName =[];
  vm.loggedIn = false;
  console.log('NG YO');

  vm.postIt = function() {
    console.log('in postIt');
    var addmes = {
      author: uName[0],
      message: vm.inputed.messIn
    };
    MesService.postPosts(addmes).then(function(res) {
      vm.displayMes();
      vm.inputed = '';
    });
  };

  vm.displayMes = function() {
    MesService.getPosts().then(function(res) {
      console.log('back in controller:');
      vm.mesArray = res;
      console.log(vm.mesArray);
    });
  };
  vm.displayMes();

  vm.logIn = function() {
    console.log('in the controller logIn');
    var credentials = {
      username: vm.userRegister,
      password: vm.inputed.passwordRegister
    };
    MesService.sendLogIn(credentials).then(function(res) {
      console.log(res);
      if (res.status == 200) {
        console.log(credentials.username);
        uName.push(credentials.username);
        console.log(uName);
        vm.loggedIn = !vm.loggedIn;
        vm.inputed = '';
      } else {
        swal(
          'Opps...',
          "We can't find your username",
          'question'
        );

      }

    });
  };
  vm.register = function() {
    var credentials = {
      username: vm.userRegister,
      password: vm.inputed.passwordRegister
    };
    console.log('in the controller logIn');
    MesService.sendRegister(credentials).then(function(res) {
      vm.inputed = '';
      console.log(res);
      if (res.status == 201) {
        swal(
          'Good job!',
          'You are now registered!',
          'success'
        );
      } else {
        swal(
          'Oops...',
          'Something went wrong!',
          'error'
        );
      }
    });
  };
  vm.logOut = function(){
    uName.pop();
    vm.userRegister = '';
    vm.loggedIn = !vm.loggedIn;
  };

});
