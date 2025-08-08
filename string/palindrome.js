// // let oldstring="mam"
// // let newstring = ""
// // for(i=oldstring.length-1;i>=0;i--){
// //     newstring = newstring+(oldstring[i]);
    
// // }

// // if (oldstring == newstring) {
// //     console.log("Palindrome");
    
// // }
// // else{
// //     console.log("Not a Palindromeok");
    
// }

// 2 nd methoid 
let string = "malram"
let ispallindrome = true
let i=0;j=string.length-1
while(i<j){
  if(string.charAt(i)!=string.charAt(j)){
    ispallindrome = false
    break
  }
  i++;
  j--
}
if(ispallindrome == true)console.log("pallindrome");
else console.log("not a pallindrome");