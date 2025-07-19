// 1 approach - 
// let arr = [12,24,25]
// let temp = new Array(arr.length)

// let j = 0;
// for(let i = arr.length-1;i>=0;i--){
//     temp[j]= arr[i]
//     j++

// }
// console.log(temp);

// 2 nd approach 
let arr = [1,23,34,56]
let i = arr[0] , j = arr.length-1;
while(i!=j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
}
console.log(arr);
