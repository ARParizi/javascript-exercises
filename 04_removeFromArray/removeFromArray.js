const removeFromArray = function(arr, deleteValue) {
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != deleteValue)
            ans.push(arr[i]);
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;