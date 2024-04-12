/** Depth First Search **
 * 
 * Return the depth first values of the given binary tree in 
 * an array.  
 * 
 */

const depthFirstSearch = (root) => {
    const results = [];

    const traverse = (node) => {
        if (node === null) return;
        results.push(node.val);
        traverse(node.left);
        traverse(node.right);
    };

    traverse(root);

    return results;
};

module.exports = depthFirstSearch;

module.exports = depthFirstSearch;