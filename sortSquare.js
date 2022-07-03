/*
Question:=======================>>>>>>>>
"Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]."
*/

//========================================================================================================================//
//Answer:===========================>>>>>>>
function sortArr(nums){
    //take a empty array
    let result=[];
    // take left position as 0 and right position as the last position of the array
     let left = 0;
        let right = nums.length-1;
        let length = nums.length-1;
        //itrate while left<=right
        while(left <= right)
        {
            //if the absolute value og left element is geter than the absolute value of right element then make the length index 
            //of the result array to the square of left of number array
            if(Math.abs(nums[left]) > Math.abs(nums[right]))
            {
                result[length] = Math.pow(Math.abs(nums[left]),2);
                left++;
            }else{
                //else make the length index 
            //of the result array to the square of right of number array
                result[length] = Math.pow(Math.abs(nums[right]),2);
                right--;
            }
            length--;
        }
        //return the result array
        return result;
    }
console.log(sortArr([-4,-1,0,3,10]))
