class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function getDecimalValue(head: ListNode | null): number {
    let currentNode = head;
    let binaryInString = "";
    while (currentNode != null){
        binaryInString += currentNode.val;
        currentNode = currentNode.next;
    }
    return parseInt(binaryInString, 2);
};