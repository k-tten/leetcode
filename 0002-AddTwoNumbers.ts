function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let node = null;
    let out = null;

    let carry = 0;

    while (l1 || l2 || carry) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;

        const next = new ListNode(sum % 10);

        if (node) node = node.next = next;
        else out = node = next;

        carry = sum / 10 | 0;

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return out;
}
