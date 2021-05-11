

pfApp.factory('getService', ['$http', function($http){
    var getData = function(uriName){
        return $http({
          method: 'GET',
          url: uriName
        })
        .then(function successCallback(response) {
            return response.data;
        })
        .catch(function errorCallback(err) {
            throw err;
        });
    };
    return {getData:getData};
}]);