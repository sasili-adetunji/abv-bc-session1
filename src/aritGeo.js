/* A function to check whether an array is arithmetic progression or geometric progression

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Home Study Session Day 1
Date: 16 May, 2017.

*/

module.exports = {

aritGeo: function (arr) {
    // common difference in an AP second term minus first term
    let difference = arr[1] - arr[0];
    // common ratio in a GP is second term divided by fisrt term
    let ratio = arr[1] / arr[0];
    let arit = true;
    let geo = true;
    for (let i = 0; i < arr.length - 1; i++) {
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