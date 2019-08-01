
module.exports.trappingWater = (arr) => {
    return  new TrapCal(arr).calc()

}

class TrapCal {
    constructor(arr) {
        this.arr = arr;
        const trapLength = arr.length - 1;
        this.result = 0;
        this.left = 0;
        this.right = trapLength;
        this.heightLeft = 0;
        this.heightRight = 0;
    }



    calc(){
        while(this.left <= this.right){
            const {left, right, arr} = this;
            //if left hand side is less than right hand side, (Checks which side to start working forward or back from).
            if(arr[left] <= arr[right]){
               this.trapLeft();
            } else {
                // else if right is bigger move arr[right] to heightRight.
              this.trapRight();
            }
        }
        return this. result;
    };

     trapLeft()  {
         // if left is greater than the heightLeft we will make left = heightLeft
         const {heightLeft, result, left, arr} = this;
         if(arr[left] >= heightLeft) {
             this.heightLeft = arr[left];
         } else {
             //Else you will take away the difference between
             this.result = result + heightLeft-arr[left];
         }
         this.left++;
    };

     trapRight () {
         const {heightRight, result, right, arr} = this;
         if(arr[right] >= heightRight) {
             this.heightRight = arr[right];
         } else {
             //Else you will take away the difference between
             this.result = result + heightRight-arr[right];
         }
         this.right--;
    }
}
