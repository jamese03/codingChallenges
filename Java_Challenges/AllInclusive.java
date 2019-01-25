/*
Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr (C returns 1)
false otherwise (C returns 0)
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

*/
import java.util.List;
import java.util.ArrayList;

public class Rotations {
    
    public static boolean containAllRots(String strng, List<String> arr) {
        List<String> answer = new ArrayList<>(strng.length());
        char[] chArr = strng.toCharArray();
        StringBuilder strngBuilder = new StringBuilder(strng);
     
        for(int i=chArr.length -1; i >=0; i--){
            // delete last character in char array
            strngBuilder.deleteCharAt(chArr.length -1);
             //insert new character into first position 
            strngBuilder.insert(0,chArr[i]);
            // add new permutation to answer list
            answer.add(strngBuilder.toString());
     }
     return arr.containsAll(answer);
     
    }
}