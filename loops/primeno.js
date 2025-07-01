// function isprime(n){
//     let prime = true;

//     if (n <= 1) {
//         console.log("Not a prime number");
//         return;
//     }

//     for(let i = 2; i < n; i++){
//         if(n % i === 0){
//             prime = false;
//             break;
//         }
//     }

//     if(prime){
//         console.log("Prime number");
//     } else {
//         console.log("Not a prime number");
//     }
// }

// isprime(8); 

// function isPrime(n) {
//     if (n <= 1) {
//         console.log("Not a prime");
//         return;
//     }

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             console.log("Not a prime");
//             return;
//         }
//     }

//     console.log("Prime number");
// }
// isPrime(2)

function isprime(n){
    if(n<=1) return false;
    if(n==2) return true
    if(n%2==0) return false
    for(let i = 3;i<Math.sqrt(n);i+=2){
        if(n%i == 0) return false
    }
    return true
}
console.log(isprime(12))