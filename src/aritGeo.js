/* A function to generate prime numbers of numbers from 0 to n

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Self Leearning Clinic
Date: 15 May, 2017.

*/

module.exports = {

aritGeo: function (arr) {


 var difference = arr[1] - arr[0];
  var ratio = arr[1] / arr[0];
 var arit = true;
var geo = true;
  
  for (var i = 0; i < arr.length - 1; i++)
 {
  if (arr[i + 1] - arr[i] !== difference)
  arit = false;
  if (arr[i + 1] / ratio !== arr[i])
  geo = false;
}
  if (arr === undefined || arr.length === 0) 
  return 0;
  else if (arit === true)
  return "Arithmetic";
  else if (geo === true)
  return "Geometric";
  else
  return -1;
}
}