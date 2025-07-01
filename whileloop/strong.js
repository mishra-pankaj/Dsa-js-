function strongNo(n) {
    let sum = 0;
    let original = n;

    while (n > 0) {
        let rem = n % 10;

       
        let fact = 1;
        for (let i = 1; i <= rem; i++) {
            fact *= i;
        }

        sum += fact;
        n = Math.floor(n / 10);
    }

    if (sum === original) {
        console.log("Strong number");
    } else {
        console.log("Not a strong number");
    }
}

strongNo(145); 
