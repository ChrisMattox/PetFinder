app.controller("birdsController", ["$http", function($http) {
  console.log('birdsController up and running');
  var key = 'adb8927f6ae7945e243d047a6d5e1a7c';
  var self = this;

  self.animal = {};

  self.getRandomPet = function(){
    var query = 'http://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + key; // Giving petfinder our key
    query += '&animal=' + 'bird';
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  self.getRandomPet();

  self.message = "Welcome!"
}]);
