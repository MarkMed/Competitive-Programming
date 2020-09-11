class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
	}
}
   
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let L1index = l1
	let L2index = l2
	if (L1index === null || L2index === null) {
		return (L1index != null)?(L1index):(L2index)
	}
	const startNode = (L1index.val <= L2index.val)?(L1index):(L2index);
	let currentNode = startNode;

	while(L1index != null && L2index != null){
		// Where set the node to repoint
		if (L1index.val <= L2index.val) {
			currentNode = L1index;
			L1index = L1index.next;
		}
		else {
			currentNode = L2index;
			L2index = L2index.next;
		}
		// Which node to repoint
		if (L1index != null && L2index != null) {
			if (L1index.val <= L2index.val) {
				currentNode.next = L1index;
			}
			else {
				currentNode.next = L2index;
			}
		}
	}
	if (L1index != null) {
		currentNode.next = L1index
	}
	else {
		currentNode.next = L2index
	}
	
	return startNode
};