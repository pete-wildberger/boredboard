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

});
