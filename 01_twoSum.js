/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

nums = [2, 7, 11, 15];
target = 9;


// Brute Force any order array
var twoSum = function(nums, target) {
    for (let i=0; i < nums.length; i++) {
        for(let j=i+1; j < nums.length; j++) {
            if (nums[i]+nums[j] === target) {
                return console.log([i,j]);
            }
        }
    }
};
twoSum(nums, target);





// Works only for ascending order array

// var twoSum = function (nums, target) {
//     let head = 0
//     let tail = nums.length - 1
//     let ans = []
//     while (head != tail || tail > head) {
//         if (nums[head] + nums[tail] === target) {
//             ans.push(head, tail)
//             head++
//             tail--
//             return ans
//         } else if ((nums[head] + nums[tail]) > target) {
//             tail--
//         } else {
//             head++
//         }
//     }
// };
// console.log(twoSum(nums, target));