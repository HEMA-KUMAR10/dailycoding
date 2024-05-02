var arr = [1,2,3,3,4,5,5];
var arr1 = [];

for(let i =0; i< arr.length-1; i++){
    let j = i+1;
    arr1.push(arr[i]);
    if(arr[i] == arr[j]){
        i++;
    }
   
}
console.log(arr1);