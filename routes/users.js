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
* and sends the sum of those numbers in response as a string
* @param {string} x
* @param {string} y
*/
router.get('/get-sum/:x/:y',function(req,res,next){

	 var numA = Number(req.params.x);
	 var numB = Number(req.params.y);

	 if(!isNaN(numA) && !isNaN(numB))
	{
       res.send(addition(numA,numB).toString());
	}
	else
	{
	   res.send('Error:Please provide Numeric Inputs!');

	}
	 
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
