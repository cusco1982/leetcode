
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    let arr = [];
    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] < nums2[j] || !(j < nums2.length) && (i < nums1.length)) {
            arr.push(nums1[i])
            i++
        } else if (j < nums2.length) {
            arr.push(nums2[j])
            j++
        }
    };
    const mid = Math.floor(arr.length / 2)
    return console.log(arr.length % 2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2)
};



findMedianSortedArrays([1, 3], [2])
findMedianSortedArrays([1, 2], [3, 4])


// ----------------------------------------------------------------------------------------------
// var findMedianSortedArrays = function (nums1, nums2) {
// let mergeArr = [];
// for(let i=0;i<nums1.length;i++){
//     mergeArr.push(nums1[i])
// }
// for(let j=0;j<nums2.length;j++){
//     mergeArr.push(nums2[j])
// }
// mergeArr.sort((a,b)=>a-b)
// let mid = Math.floor(mergeArr.length/2)
// if(mergeArr.length%2 === 0){
//     return console.log((mergeArr[mid-1] + mergeArr[mid])/2)
// }else{
//     return console.log(mergeArr[mid])
// }
// };
// ----------------------------------------------------------------------------------------------
// var findMedianSortedArrays = function (nums1, nums2) {
//     let arr = [];
//     while (nums1.length || nums2.length) {
//         if ((nums1[0] <= nums2[0]) || !nums2.length && nums1.length) {
//             const firstelement = nums1.shift()
//             arr.push(firstelement)
//         } else {
//             const firstelement = nums2.shift()
//             arr.push(firstelement)
//         }
//     }
//     const mid = Math.floor(arr.length / 2)
//     return console.log(arr.length%2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2)
// };
