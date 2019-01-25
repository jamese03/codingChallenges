/*
 * @param {string} s
 * @return {number}
         Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

        Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
        For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

        Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle          applies to the number nine, which is written as IX. There are six instances where subtraction is used:

        I can be placed before V (5) and X (10) to make 4 and 9. 
        X can be placed before L (50) and C (100) to make 40 and 90. 
        C can be placed before D (500) and M (1000) to make 400 and 900.
        Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
 */
var romanToInt = function(s) {
    let ans = 0;
    for(var i=0; i < s.length; i++){
        let ch = s.charAt(i)
        let str;
        if(i< s.length - 1){
            str = s.charAt(i) + s.charAt(i+1) // used to determine if we have a subtraction case of Roman Numerals
        }
        // Simple switch to deal with addition, ignoring negative cases
            switch(ch){
                case 'I':
                    ans+=1;
                    break; 
                    
                case 'V':
                    ans +=5;
                    break;

                case 'X':
                    ans +=10;
                    break;

                case 'L':
                    ans+=50;
                    break;

                case 'C':
                    ans +=100;
                    break;

                case 'D':
                    ans+= 500;
                    break;

                case 'M':
                    ans +=1000;
                    break;
            } 
        
        // Since we are just adding all Roman Numerals above, we want to now check for cases where we need to subtract rather than add. Since we already added we need to subtract 2 times the value of that roman Numeral. 
        // For example all cases of I* subtrack 2 from answer, all cases of 'V*' subtract 10 from answer
        
        switch(str){
            case 'IV': 
            case 'IX': 
            case 'IL':
            case 'IC':
            case 'ID':
            case 'IM':
                ans-=2;
                break; 

            case 'VL':
            case 'VC':
            case 'VD':
            case 'VM':
                ans-=10;
                break; 

            case 'XL':
            case 'XC': 
            case 'XD': 
            case 'XM':
                ans -=20;
                break;

            case 'LD':
            case 'LM':
                ans -=100;
                break;
                
            case 'CD': 
            case 'CM':
                ans -=200;
                break;
            }
         
        }
        
    return ans;
    
};