angular.module('app')
  .controller('NewController', ['$http', 'AddHood', '$location', function($http, AddHood, $location){
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
      console.log("order placed");
      self.orderDetails={};
      $location.path('/thankyou');
    }

    function handleError(err) {
      console.log('addHood error:', err);
    }

  }]);
