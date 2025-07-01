function factor(n){
    // for (i=1;i<=n;i++){
    //     if(n%i ==0){
    //         console.log(i);
            
    //     }
    // }
     ;
    for(i=1;i<=n/2;i++){
        if(n%i===0){
            console.log(i);
            
        }
        
        
    }
    console.log(n);
    
    
    
}
factor(12)