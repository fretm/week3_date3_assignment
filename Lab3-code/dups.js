/**
 * Write a function called removeDups(numList) that takes an Array which may contain diplicates, and
then returns a new Array with the duplicates removed.
 */

 function removeDups(numlist){
     let storage = [];
     let myset = new Set (numlist)
     for(let item of myset){
        
            storage.push(item)
    
 }
 return storage;
}
numlist= [1, 3, 4, 6, 2, 4, 3, 1, 8, 5, 6];
console.log(removeDups(numlist))