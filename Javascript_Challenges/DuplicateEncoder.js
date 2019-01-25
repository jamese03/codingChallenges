/*
The goal of this exercise is to convert a string to a new string where each character 
in the new string is '(' if that character appears only once in the original string, or ')' 
if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("
*/

function duplicateEncode(word) {
    let ans = '';
    let lower = word.toLowerCase(); // ignore capitlization

    for (var i = 0; i < word.length; i++) {
        let ch = lower.charAt(i);
        // by utilizing lasIndex of we can easliy determine if there are multiple elements of ch
        if (lower.indexOf(ch) === lower.lastIndexOf(ch)) {
            ans += '(';
        } else {
            ans += ')';
        }
    }
    return ans;
}