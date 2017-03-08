angular.module('app')
  .controller('NewController', ['$http', 'AddHood', function($http, AddHood){
    const self = this;
    self.orderDetails = {};
    self.addHood = function(orderDetails){
      AddHood.addHood(
        {
          name: orderDetails.name,
          email: orderDetails.email,
          size: orderDetails.size
        }
      )
      .then(clearObject)
      .catch(handleError)
    }
    function clearObject(){
      self.orderDetails={};
    }

    function handleError(err) {
      console.log('addHood error:', err);
    }

  }]);
