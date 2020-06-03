/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    let queue = [root];
      
      while(queue.length !== 0){
          let current = queue.shift();
          
          if( current.val >= L && current.val <= R){
              sum += current.val;
          }
          
          if (current.left)  {
              queue.push(current.left)
          }
          if (current.right){
              queue.push(current.right)
          }
      }
      return sum;
     
  };
      // val - 
      // L 7, R 15.       // sum = 10 + 7 + 15  = 32
      
      //.       10
      //.    5.      15
      //.  3.  7.  null  18  