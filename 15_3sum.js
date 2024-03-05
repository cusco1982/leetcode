// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

var threeSum = function (nums) {

    let arr = [];
    if (nums.length < 3) return arr

    nums.sort((a, b) => (a - b))


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;


        let j = i + 1;
        let k = nums.length - 1

        while (j < k) {

            const sum = nums[i] + nums[j] + nums[k]

            if (!sum) {
                arr.push([nums[i], nums[j], nums[k]])
                j++
                k++
                while (j < k && nums[j] === nums[j - 1]) j++
                while (j < k && nums[k] === nums[k + 1]) k--
            }
            else if (sum < 0) j++
            else if (sum > 0) k--
        }
    }


    return console.log(arr)
};


/*
- space O(1)

- time O(n2)
*/


threeSum([-1, 0, 1, 2, -1, -4])
// Expected: [[-1,-1,2],[-1,0,1]]

threeSum([0, 1, 1])
// Expected: []

threeSum([0, 0, 0])
// Expected: [[0,0,0]]

threeSum([0, 0, 0, 0])
// Expected: [[0,0,0]]

threeSum([-2, 0, 1, 1, 2])
// Expected: [[-2,0,2],[-2,1,1]]

threeSum([-2, -3, 0, 0, -2])
// Expected: []


// -----------------------------------------------------------------------------------------------------
// var threeSum = function (nums) {
//     let arr = [];
//     let i = 0;
//     let j = 1;
//     let k = 2;
//     while (i < nums.length - 2) {
//         if ((nums[i] + nums[j] + nums[k])) {
//             j++
//             k++
//         } else {
//             arr.push([nums[i], nums[j], nums[k]])
//             j = j + 2
//             k = k + 2
//         }
//         if (k > nums.length - 1) {
//             i++
//             j = i + 1
//             k = i + 2
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let first = arr[i]
//             let second = arr[j]
//             if ((first[0] === second[0] || first[0] === second[1] || first[0] === second[2]) && (first[1] === second[0] || first[1] === second[1] || first[1] === second[2])) {
//                 arr.splice(j, 1)
//             }
//         }
//     }
//     return console.log(arr)
// };
// -----------------------------------------------------------------------------------------------------
// var threeSum = function (nums) {
//     let arr = [];
//     let i = 0;
//     let j = i + 1;
//     let k = nums.length - 1
//     let target;
//     nums.sort((a, b) => (a - b))
//     while (i < nums.length - 2) {
//         if (j >= k) {
//             i++
//             j = i + 1
//             k = nums.length - 1
//         }
//         target = -nums[i];
//         let sum = nums[j] + nums[k]
//         if (sum < target) {
//             j++
//         } else if (sum > target) {
//             k--
//         } else {
//             arr.push([nums[i], nums[j], nums[k]])
//             j++
//             k--
//         }
//     }
//     const finalarr = Array.from(new Set(arr.map(JSON.stringify)), JSON.parse)
//     return console.log(finalarr)
// };
