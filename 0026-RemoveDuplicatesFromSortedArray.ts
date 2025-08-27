function removeDuplicates(nums: number[]): number {
    nums.splice(0, nums.length, ...new Set(nums));

    return nums.length;
}
