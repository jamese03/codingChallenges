/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
    Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

    You may assume no duplicates in the array.
 */
var searchInsert = function(nums, target) {
    if(nums[0] >target) return 0; // if array is sorted, we can assume that if the first index is larger than the target, the target doesn't exist in the array
   
   if(nums[nums.length-1 ] < target) return nums.length; // If the last element of the array is less than the target, the target needs to be at the end of the array
   
   for (var i = 0; i < nums.length; i++){
       // case if we match to the target in the array
       if(nums[i] === target) {
           return i;
       }
      
       if(i > 0){
           // checking before currend index, and current index to see if target would go in between elements, if so return that index
           if(nums[i-1] < target && nums[i] > target){
               return i;
           }
       }
   }
};