// Definition for singly - linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// var isPalindrome = function (head) {
//     let curr = head
//     let arr = []
//     while (curr != null) {
//         arr.unshift(curr.val)
//         curr = curr.next
//     }
//     curr = head
//     while (curr != null) {
//         if (curr.val === arr[0]) {
//             arr.shift()
//             curr = curr.next
//         } else {
//             return false
//         }
//     }
//     return true
// };




// correct stack comparison
var isPalindrome = function (head) {
    let curr = head
    let stack = []
    while (curr != null) {
        stack.push(curr.val)
        curr = curr.next
    }
    curr = head
    while (curr != null) {
        if (curr.val === stack.pop()) {
            curr = curr.next
        } else {
            return console.log(false)
        }
    }
    return console.log(true)
};

isPalindrome([1, 2, 2, 1])
isPalindrome([1, 2])
isPalindrome([1])
isPalindrome([])
isPalindrome([1, 2, 3, 2, 1])
isPalindrome([1, 2, 3, 3, 2, 1])


// tortoise and hare method - slow and fast pointer to find the middle of the list
// create 2 linked lists, one from head to middle and the other from end to middle and compare









// tortoise and hare method - slow and fast pointer to find the middle of the list
// push 1/2 of the list into a stack and pop from the stack to compare or something