function sumofdigit(n){
    var sum = 0
    while(n>0){
        
        var rem = n%10
        sum = sum+rem
        n = Math.floor(n/10)
        
    }
    console.log(sum);
    
}
sumofdigit(1235)