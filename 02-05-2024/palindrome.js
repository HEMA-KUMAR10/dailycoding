var word1 = "madam";
var result = true;
var i = 0;
var j = word1.length-1;
        while(i!=j){
            if(word1.charAt(i) != word1.charAt(j)){
                result = false;
            }
            i++;
            j--;
        }
  if(result == true){
        console.log("This is a Palindrome");
  }
 else if(result == false){
        console.log("This is not a Palindrome");
 } 
