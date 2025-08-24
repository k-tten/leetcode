function maxArea(height: number[]): number {
    let left = 0, right = height.length - 1;

    let max = 0;

    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);

        if (area > max) max = area;

        if (height[left] < height[right]) left++;
        else right--;
    }

    return max;
}
