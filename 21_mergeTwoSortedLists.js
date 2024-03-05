/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


var mergeTwoLists = function (list1, list2) {

    let curr = new ListNode();
    const dummy = curr

    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next;
    }

    if (list1) {
        curr.next = list1
    }

    if (list2) {
        curr.next = list2
    }

    // console.log(JSON.stringify(dummy))
    // console.log(dummy)

    return dummy.next
};

// Space complexity is constant O(1)
// Time complexity is O(m+n)





// Output: [1,1,2,3,4,4]
mergeTwoLists([1, 2, 4], [1, 3, 4])



/*---------------------------

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]

---------------------------*/




/*------ Doesn't work on linked lists -------

var mergeTwoLists = function (list1, list2) {
    const arr = list1.concat(list2)
    arr.sort((a,b) => (a-b))
    console.log(arr)
};

-------------------------------------------*/
