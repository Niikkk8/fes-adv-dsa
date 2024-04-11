/** Middle of Linked List **
 * 
 * Find the middle node of the given linked list. 
 *  
 * @example
 * middle(1 -> 2 -> 3) -> 2
 * middle(10 -> 20 -> 30 -> 40) -> 30 
 * middle(100 -> 200 -> 300 -> 400 -> 500) -> 300 
 * 
 */

const middle = (head) => {
    let slowPointer = head
    let fastPointer = head
    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }

    return slowPointer
}

//DO NOT EDIT BELOW THIS LINE
class Node {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

module.exports = middle;