var app = angular.module('myApp', []);

app.controller('BoredBoard', function(MesService) {
  var vm = this;
  console.log('NG YO');

  vm.postIt = function() {
    console.log('in postIt');
    var addmes = {
      author: vm.inputed.nameIn,
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

});
