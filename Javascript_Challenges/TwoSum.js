/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
        Given an array of integers, return indices of the two numbers such that they add up to a specific target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
var twoSum = function(nums, target) {

    let map = new Map();
    
    for(var i =0; i < nums.length; i++){
        let complement = target - nums[i]; // utlize complement to avoid nested forloop approach O(n^2)
        let compIdx = map.get(complement);
        
        if(compIdx !== undefined){
            // if we have already added the complement to the map, we just want to return the index of that complement
            return [compIdx, i];
        } else {
            // set the map to include the index of each number
            map.set(nums[i], i);
        }
    }
};