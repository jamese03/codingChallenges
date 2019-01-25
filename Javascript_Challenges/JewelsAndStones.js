/*
 * @param {string} J
 * @param {string} S
 * @return {number}
    You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
    The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
 */
var numJewelsInStones = function(J, S) {
    let match = 0;
    // Checking that each character of S exists in J and if exists adding to match count. 
    for(var i =0; i < S.length; i++){
      let ch = S.charAt(i);
        if(J.includes(ch)) match++;
    }
    return match; 
};