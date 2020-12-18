// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    const map = new Map();
    let current = head;
    let counter = 0;
    while (current) {
        map.set(counter, current);
        counter++;
        current = current.next;
    }
    mid = Math.floor(counter/2);
    return map.get(mid);
};