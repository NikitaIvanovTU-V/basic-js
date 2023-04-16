const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr))
  throw new Error("'arr' parameter must be an instance of the Array!");
  let trArr=[];
  let dir=["--discard-prev","--discard-next","--double-next","--double-prev"];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case dir[0]:
        if(arr[i-2]!=dir[1] && i>0){
          trArr.pop();
        }
        break;
      case dir[1]:
        if(i<arr.length-1){
         ++i;
        }
        break;
      case dir[2]:
        if(i<arr.length-1)
          {
            trArr.push(arr[i+1]);
          }
        break;
      case dir[3]:
        if(arr[i-2]!=dir[1] && i>0)
        trArr.push(arr[i-1]);
        break;
      default:
        trArr.push(arr[i]);
        break;
    }
  }
      
    
  
 return trArr;
}

module.exports = {
  transform
};
