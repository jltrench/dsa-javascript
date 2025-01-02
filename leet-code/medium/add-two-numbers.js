class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(0)
    let current = head
    let carry = 0

    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        let sum = val1 + val2 + carry
        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return head.next
};

// Função auxiliar para criar uma linked list a partir de um array
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Função auxiliar para converter linked list para array  (visualização)
function listToArray(list) {
    let result = [];
    let current = list;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Teste
const l1 = arrayToList([2, 4, 4]);
const l2 = arrayToList([5, 6, 4]);
const result = addTwoNumbers(l1, l2);
console.log(listToArray(result));