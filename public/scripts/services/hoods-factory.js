angular.module('app')
  .factory('AddHood', ['$http', '$q', hoods]);

function hoods($http, $q){

  function addHood(data){
    return $http({
      method: 'POST',
      url: '/hoods',
      data: data
    })
    .catch(sendError);
    console.log("route to DB stopped for now", data);
  }


  function sendError(err) {
    return $q.reject('POST hood error');
  }
  return {
    addHood: addHood

  };
}
