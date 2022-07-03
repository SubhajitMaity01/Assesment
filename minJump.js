/*
Question:
"Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index."
*/

//==========================================================================================================//
//Approach 1: Bruteforce(Recursive):

// My first approach to solve this problem is to start from the first element of the array and recursively travel to all elements
// that are reachable from that element. Similarly, recursively travel to all other elements and find the minimum jumps to reach 
//the end of the array.

function decideTheJump(nums,n,currPos){

    //if currPos is geter than or at last index then return 0(this is the base condition)
    if(currPos >=  n-1){
        return 0;
    }
    //take the maximum value of number and store that at minJump variable
    let minJump = Number.MAX_VALUE;

    // max step is initially the 0th position of the nums array
    let maxSteps = nums[currPos]

    //itrate while maxstep>0
    while(maxSteps > 0){

        //minJump will now store the minimum value between munJump and the recursive call of the function
        minJump = Math.min(minJump, 1 + decideTheJump(nums,n,currPos+maxSteps))
        maxSteps = maxSteps - 1
        
    }
    return minJump
}
   
function jump(nums) {

    //call the decideJump Function
    return decideTheJump(nums,nums.length, 0)
}
console.log(jump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))

//BUT HERE ---
// Time Complexity: O(N^N), where N is the total elements in the array.
//Space Complexity: O(1), since no extra space is used.

//=======================================================================================================//

//2nd Approach:(Optimized approach)


function minJump(nums) {

    //Consider three variables, jumps, which stores the number of jumps, end, which denotes the end of the array 
//and farthest denoting the farthest one can jump and initialise them to 0.
    let jumps = 0;
    let currentJumpEnd = 0;
    let farthest = 0;

    //Traverse over the given array and perform the following operation:
    //farthest = i + nums[i]
    for (let i = 0; i < nums.length - 1; i++) {
         farthest = Math.max(farthest, i + nums[i]);

         //If end is reached, then ith jump is finished, therefore update end = farthest.
         if (i == currentJumpEnd) {
            jumps++;
            currentJumpEnd = farthest;
        }
    }

    //Return total jumps. 
    return jumps;
}
console.log(minJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))


//Time Complexity: O(N), where N is the total elements in the array.
//Space Complexity: O(1), since no extra space is used.
