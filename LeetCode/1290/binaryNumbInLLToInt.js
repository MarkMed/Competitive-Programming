var getDecimalValue = (head) => {
    let currentNode = head;
    let binaryInString = "";
    while (currentNode != null){
        binaryInString += currentNode.val;
        currentNode = currentNode.next;
    }
    return parseInt(binaryInString, 2);
};