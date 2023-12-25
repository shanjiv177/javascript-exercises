const removeFromArray = function(arr,...args) {
    let l = arr.length;
    for (let n of args){
        for (let i =0; i < l;i++){
            if (n === arr[i]){
                arr.splice(i,1);   
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
