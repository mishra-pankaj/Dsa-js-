// 1 approach - 
let arr = [12,24,25]
let temp = new Array(arr.length)

let j = 0;
for(let i = arr.length-1;i>=0;i--){
    temp[j]= arr[i]
    j++

}
console.log(temp);
