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