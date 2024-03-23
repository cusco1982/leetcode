let nums = [1, 3, 6, 20]

const removeDuplicatedSortedArr = (nums) => {
    
    if (nums.length === 0) return
    let i = 0

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }
    return console.log(i + 1)
}

removeDuplicatedSortedArr(nums)