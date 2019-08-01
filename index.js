
 module.exports.trappingWater = (arr) => {
    let trapLength = arr.length - 1;
    let result = 0;
    let left = 0;
    let right = trapLength;
    let heightLeft = 0;
    let heightRight = 0;

    while(left <= right){
        //if left hand side is less than right hand side, (Checks which side to start working forward or back from).
        if(arr[left] <= arr[right]){
            // if left is greater than the heightLeft we will make left = heightLeft
            if(arr[left] >= heightLeft) {
                heightLeft = arr[left];
            } else {
                //Else you will take away the difference between
                result = result + heightLeft-arr[left];
            }
            left++;
        } else {
            // else if right is bigger move arr[right] to heightRight.
            if(arr[right] >= heightRight) {
                heightRight = arr[right];
            } else {
                //Else you will take away the difference between
                result = result + heightRight-arr[right];
            }
            right--;
        }
    }
return result;
};

