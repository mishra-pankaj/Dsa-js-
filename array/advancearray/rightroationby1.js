let arr = [1,2,3,4,5]
copy = arr[arr.length-1] //5 
console.log(copy);

for(i=arr.length-1;i>0;i--){
    
    arr[i] = arr[i-1]
}
arr[0] = copy
console.log(arr);
