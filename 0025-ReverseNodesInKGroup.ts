// i cba ngl
// https://algo.monster/liteproblems/25

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let dummy = { val: 0, next: head };
    let predecessor = dummy;

    while (head !== null) {
        let tail = predecessor;

        for (let i = 0; i < k; ++i) {
            tail = tail.next;

            if (tail === null) return dummy.next;
        }

        let nextGroupHead = tail.next;

        let current = head;
        let prev = tail.next;

        while (prev !== tail) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }

        [head, tail] = [tail, head];

        predecessor.next = head;
        tail.next = nextGroupHead;

        predecessor = tail;
        head = nextGroupHead;
    }

    return dummy.next;
}
