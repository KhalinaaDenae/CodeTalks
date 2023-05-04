// S O L U T I O N 


//Given an array of integers, find the largest number in the array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function largestNum(arr){
    let largest = arr[0]
    // initialize largest num to first element in the array 

    //loop through every element in array starting at index 0 
    // BUG : set i to 10 and initialized at the 10th element which does not exist in this array 
    // this caused the program to immeidately exit the loop and return the number at the first index - 1 
    for (let i = 0; i < arr.length ; i++ ){
        // if the index is bigger than the previous index
        if ( arr[i] > largest ) {
               // then the index value is assigned to the largest variable 
            largest = arr[i]
        }
    }
    return largest
    
    
}
console.log(largestNum(arr))