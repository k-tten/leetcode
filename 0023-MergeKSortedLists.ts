/// lib/Heap.ts

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap = new Heap<{ node: ListNode; index: number }>((a, b) => a.node.val - b.node.val);

    for (let index = 0; index < lists.length; index++) if (lists[index]) heap.enqueue({ node: lists[index], index })

    let head: ListNode | null = null;
    let current: ListNode | null = head;

    while (heap.size > 0) {
        const { node, index } = heap.dequeue()!;
        
        if (current) current.next = node;
        else head = node;
        current = node;

        if (node.next) heap.enqueue({ node: node.next, index });
    }

    return head;
}
