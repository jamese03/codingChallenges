/**
 * @param {number} x
 * @return {boolean}
    Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 
 */
var isPalindrome = function(x) {
    let reverse = '';
    let str = x.toString();
    
    // Simply we need to reverse the string, then check if that string = the input string. We can do this by looping backwards and creating a new string
    
    for(var i = str.length; i >= 0; i--){
        reverse += str.charAt(i).toString();
    }
   
    return reverse === str;
};