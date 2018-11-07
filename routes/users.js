var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

});

/* adds the http api print-request and returns the request in the response*/
router.get('/print-request',function(req,res,next){
  res.send("The request method and the request body is: "+req.method + " "+JSON.stringify(req.body));
});



/* 
* /get-sum api that takes two numbers as parameters from the URL
* and sends the sum of those numbers in response
* @param {string} x
* @param {string} y
*/
router.get('/get-sum/:x/:y',function(req,res,next){

	 var numA = parseInt(req.params.x);
	 var numB = parseInt(req.params.y);
	 var sum = addition(numA,numB);
	 res.send(sum.toString());
});

/* 
* function that returns the sum of two numbers given as inputs 
* @param {integer} x
* @param {integer} y
*/
function addition(x,y)
{
   return (x + y);
}

module.exports = router;
