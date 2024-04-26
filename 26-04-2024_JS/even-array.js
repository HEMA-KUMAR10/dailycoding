var arr = [1,2,3,4];
var arr1=[];
for(let i =0; i<arr.length; i++){
    if(arr[i]%2 == 0){
        arr1.push(arr[i]);
    }
}
return arr1;