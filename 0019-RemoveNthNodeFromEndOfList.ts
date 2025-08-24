function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const first = { next: head };

    let fast = first;
    let slow = first;

    for (let i = 0; i < n; i++) fast = fast.next;

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return first.next;
}
