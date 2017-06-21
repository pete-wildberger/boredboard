app.service('MesService', function($http) {
  var sv = this;

  sv.getPosts = function() {
    return $http({
      method: 'GET',
      url: '/mes',
    }).then(function(response) {
      return response.data;
    });
  };
  sv.postPosts = function(mes) {
    return $http({
      method: 'POST',
      url: '/mes',
      data: mes
    }).then(function(response) {
      console.log('back from server with:', response);
    });
  };
  sv.sendLogIn = function() {
    console.log('in Service');
    var credentials = {
      username: "Pete",
      password: "Stone"
    };
    return $http.post('/', credentials).then(function(res) {
      console.log('login back', res);
    });
  };
  sv.sendRegister = function() {
    console.log('in Service');
    var credentials = {
      username: "Tim",
      password: "Brick"
    };
    return $http.post('/register', credentials).then(function(res) {
      console.log('login back', res);
    });
  };

});
