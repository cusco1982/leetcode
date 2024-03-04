/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {


    let pointer = m + n -1
    // let pointer = nums1.length - 1;

    if (!n) return console.log(nums1)

    // if (!m) {
    //     for (let i = 0; i < nums2.length; i++) {
    //         nums1[i] = nums2[i]
    //     }

    //     return console.log(nums1)
    // }





    for (let i = 0; i < nums1.length; i++) {



        if (m === 0) {
            nums1[pointer] = nums2[n - 1]
            n--
            pointer--
        } else if (nums1[m - 1] < nums2[n - 1]) {
            nums1[pointer] = nums2[n - 1]
            n--
            pointer--
        } else {
            nums1[pointer] = nums1[m - 1]
            m--
            pointer--
        }
    }



    console.log(nums1)
    return
}



// [1,2,2,3,5,6]
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

// [1]
merge([1], 1, [], 0)

// [1]
merge([0], 0, [1], 1)