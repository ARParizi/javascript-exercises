const sumAll = function(numA, numB) {
    if(!Number.isInteger(numA) || !Number.isInteger(numB) || numA < 0 || numB < 0)
        return 'ERROR';
    let ans  = 0;
    let step = 1;
    if(numA > numB)
        step = -1;
    for (let ii = numA; ii != numB + step; ii += step) {
        ans += ii
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
