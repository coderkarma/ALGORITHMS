function ListNode(val) {
	this.val = val;
	this.next = null;
}

var deleteNode = function (node) {
	this.node = new ListNode();
	node.val = node.next.val;
	node.next = node.next.next;
};

deleteNode(5);

Input: (head = [4, 5, 1, 9]), (node = 5);
Output: [4, 1, 9];
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
