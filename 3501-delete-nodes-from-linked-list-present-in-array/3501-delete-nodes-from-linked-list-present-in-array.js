var modifiedList = function (nums, head) {
    let temp = head;
    let newHead = head;
    const set = new Set(nums);
    while (temp !== null) {
        if (!nums.includes(temp.val)) {
            newHead = temp;
            break;
        }
        temp = temp.next;
    }
    let prev = newHead;
    temp = newHead;
    while (temp !== null) {
        if (set.has(temp.val)) {
            let next = temp.next;
            prev.next = next;
        }
        else prev = temp;
        temp = temp.next;
    }
    return newHead;
};