app.service('MesService', function($http) {
  var sv = this;

  sv.getPosts = function() {
    return $http.get('/mes').then(function(res) {
      return res.data;
    });
  };
  sv.postPosts = function(mes) {
    return $http.post('/mes', mes).then(function(res) {
      console.log('back from server with:', res);
    });
  };
  sv.sendLogIn = function(credentials) {
    console.log('in Service');
    return $http.post('/', credentials).then(function(res) {
      console.log('login back', res);
    });
  };
  sv.sendRegister = function(credentials) {
    console.log('in Service');
    return $http.post('/register', credentials).then(function(res) {
      console.log('login back', res);
    });
  };

});
