function reverse(n){
    
    // while(n>0){
        var rev = (n%10)*10
        // n = Math.floor(n/10)
        n = Math.floor(n/10)
        rev= rev+n
        console.log(rev,n);
        
    // }
  
    
}
reverse(123)