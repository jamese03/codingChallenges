/*
Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
*/

import java.lang.*; 
import java.io.*; 
import java.util.*;
public class ArrayReverser
{
   public static String[] reverse(String[] a)
   {
   String[] reverse = new String [a.length];
   StringBuilder str = new StringBuilder();
   // using Stringbuilder for reverse method
     for(int i=0; i < a.length; i++){
      str = str.append(a[i]);
     }
     
     String s = str.reverse().toString();
     
    // populating the reverse string array with each element being reveresed
     for(int i =0, j =0; i < a.length; i++){
       reverse[i] = s.substring(j, j+= a[i].length());
       
     }
     
     return reverse;
   }
}