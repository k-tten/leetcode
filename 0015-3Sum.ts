function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i && nums[i] === nums[i - 1]) continue;

        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1])
                    left++;
                while (left < right && nums[right] === nums[right - 1])
                    right--;
                left++;
                right--;
                continue;
            }

            if (sum < 0) left++;
            else right--;
        }
    }

    return triplets;
}
