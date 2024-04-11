/** Linked List Cycle **
 * 
 * Return true if there is a cycle in the given linked list.
 * Otherwise return false.  
 *  
 * @example
 * listCycle(1 -> 2 -> 3 -> 1) -> true
 * listCycle(10 -> 20 -> 30) -> false
 * listCycle(100 -> 200 -> 300 -> 100) -> true
 * 
 */

const listCycle = (head) => {
    let fastPointer = head
    let slowPointer = head
    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
        if(slowPointer === fastPointer){
            return true
        }
    }
    return false
}


module.exports = listCycle;