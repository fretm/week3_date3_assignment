/***Write a function called checkForSum(numList, numZ) which does the following: it there are two
elements numX, numY in the list whose sum is numZ it should return true, otherwise false.
Your implementation is not allowed to use nested loops. Instead you should be able to obtain the
correct return value by doing a single scan of the input list. Hint: use Map lookup.*/


function checkForSum(numList, numZ){
    let mymap = new Map();
    for(let key of numList){
          mymap.set(key , key)
              if(mymap.has(numZ-key)){
                return true;
              }
            
          }
          return false ;
    }
    
