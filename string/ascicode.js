let s= "hello"
let arr= new Array(128).fill(0)

for(let i=0;i<s.length;i++){
    let indx = s.charCodeAt(i)
    arr[indx] = arr[indx] + 1;

}
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        console.log(String.fromCharCode(i)+" apperead at" + arr[i]+" time");
        
    }
}