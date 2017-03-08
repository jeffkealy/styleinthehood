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
  }


  function sendError(err) {
    return $q.reject('POST hood error');
  }
  return {
    addHood: addHood

  };
}
