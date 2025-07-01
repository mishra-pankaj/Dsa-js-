function factorial(n){
// 1 approach 
    // fact = 1
    // for(i=1;i<=n;i++){
    //     fact = fact*i
    // }
    // console.log(fact);
    if(n<0) return null 
    if(n==0 || n==1) return 1
    return n*factorial(n-1)

}
factorial(2)