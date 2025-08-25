function swapPairs(head: ListNode | null): ListNode | null {
    let dummy = { next: head };
  
    let previous = dummy;
    let current = head;

    while (current && current.next) {
        let temp = current.next;
        current.next = temp.next;
        temp.next = current;
        previous.next = temp;
      
        previous = current;
        current = current.next;
    }
  
    return dummy.next;
}
