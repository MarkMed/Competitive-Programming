var getIntersectionNode = (headA, headB) => {
	let linkedListALength = 0;
	let linkedListBLength = 0;
	let currentANode = headA;
	let currentBNode = headB;
	let greaterLLLength = 0;

    while (currentANode) {
		linkedListALength++
		currentANode = currentANode.next;
	}
    while (currentBNode) {
		linkedListBLength++
		currentBNode = currentBNode.next;
	}

	currentANode = headA;
	currentBNode = headB;
	greaterLLLength = (linkedListALength > linkedListBLength)?(linkedListALength):(linkedListBLength);

	for (let i = 0 ; (i < greaterLLLength) && (currentANode != null) && (currentBNode != null); i++) {
		if (i < Math.abs(linkedListALength - linkedListBLength)) {
			if (linkedListALength > linkedListBLength) {
				currentANode = currentANode.next;

			}
			else {
				currentBNode = currentBNode.next;
			}
		}
		else {
			if (currentANode === currentBNode) {
				return currentANode
			}
			else {
				currentANode = currentANode.next;
				currentBNode = currentBNode.next;
			}

		}
	}
	return null
};