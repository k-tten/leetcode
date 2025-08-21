function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

    const m = nums1.length, n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        const mid1 = Math.floor((low + high) / 2);
        const mid2 = Math.floor((m + n + 1) / 2) - mid1;

        const l1 = mid1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1];
        const r1 = mid1 === m ? Number.MAX_SAFE_INTEGER : nums1[mid1];
        const l2 = mid2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1];
        const r2 = mid2 === n ? Number.MAX_SAFE_INTEGER : nums2[mid2];

        if (l1 <= r2 && l2 <= r1) {
            if ((m + n) % 2) return Math.max(l1, l2);
            
            return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
        }

        if (l1 > r2) high = mid1 - 1;
        else low = mid1 + 1;
    }

    return 0;
}
