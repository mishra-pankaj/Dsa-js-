arr = [12,13,15,7,14]
first_max = Math.max(arr[0],arr[1])
second_max = Math.min(arr[0],arr[1])
for(i=2;i<arr.length;i++){
   if(arr[i]>first_max) {
    second_max = first_max
      first_max = arr[i]    
   }
   else if(arr[i]> second_max && first_max!= arr[i]){
        second_max = arr[i]
   }
}
console.log(second_max);
