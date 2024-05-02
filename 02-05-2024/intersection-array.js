var set1 = [1,2,3,4];
var set2 = [3,4,5,6];
var set3 = [];
var result;
for(let i =0; i<set1.length; i++){
    for(let j=0; j<set2.length; j++){
       if(set1[i] == set2[j]){
           result = false;
            break;
       }
       if(result == true){
           set3.push(set1[i]);
       }
    }
}

console.log(set3);