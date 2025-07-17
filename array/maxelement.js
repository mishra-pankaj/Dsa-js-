arr = [1, 10, 9, 7];
let max =  arr[0];
for (i = 1; i < arr.length; i++) {
  if ( arr[i]>max) {
    max = arr[i];
  } 
}
console.log(max);
