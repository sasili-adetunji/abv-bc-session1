/* A function to check Minimum and Maximum numbers

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Self Leearning Clinic
Date: 16 May, 2017.

*/

module.exports = {

findMinMax: function (arr){
    // an empty array to hold the minimum and maximum numbers
    let minMax = [];
    let minimum;
    let maximum;

// using an inbuilt maths fucntion to find minimum and maximum numbers
    
    minimum = Math.min.apply(null, arr);
    maximum = Math.max.apply(null, arr);

    if (minimum === maximum)
        minMax[0] = minimum

    else {
// pushing the numbers into the empty array
        minMax[0] = minimum;
        minMax[1] = maximum;
        }

    return minMax;
    }

}