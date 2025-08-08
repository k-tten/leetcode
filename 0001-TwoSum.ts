/**
 * no need to loop over the array again to find the complement 
 * use a map to retrieve complement
 */

function solution(nums: number[], target: number): number[] {
    const map = new Map();

    for (let i = 0; i < nums.length; i++)
        if (map.has(target - nums[i]))
            return [i, map.get(target - nums[i])];
        else
            map.set(nums[i], i);

    throw new TypeError();
}
