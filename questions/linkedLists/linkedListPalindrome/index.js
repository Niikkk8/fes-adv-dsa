/** Linked List Palindrome **
 *
 * Return true if the given linked list is a palindrome.
 * Otherwise return false.
 *
 * @example
 * isPalindrome(1 -> 2 -> 2 -> 1) true
 * isPalindrome(10 -> 20 -> 30) false
 * isPalindrome(10 -> 20 -> 300 -> 10 -> 20) true
 *
 */

const isPalindrome = (head) => {
    const values = [];
    let curr = head;

    while (curr) {
        values.push(curr.val);
        curr = curr.next;
    }

    let leftPointer = 0;
    let rightPointer = values.length - 1;

    while (leftPointer <= rightPointer) {
        if (values[rightPointer] !== values[leftPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    
    return true;
};

module.exports = isPalindrome;