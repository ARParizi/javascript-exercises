const removeFromArray = function(arr, ...deleteValue) {
    const ans = [];
    console.log(deleteValue);
    L1: for (let i = 0; i < arr.length; i++)
    {
        ans.push(arr[i]);
        for (let j = 0; j < deleteValue.length; j++)
            if (arr[i] === deleteValue[j])
            {
                ans.pop();
                continue L1;
            }
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;