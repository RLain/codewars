/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, 
but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the 
elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  console.log(nums1); // [ 1, 2, 3, 0, 0, 0 ]
  nums1.splice(m, n, ...nums2);
  console.log(nums1); // [ 1, 2, 3, 2, 5, 6 ]
  nums1.sort((a, b) => a - b);
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [ 1, 2, 2, 3, 5, 6 ]

/*ℹ️
1. The splice() method is used to replace a portion of nums1 with the elements of nums2, 
starting from index m (where the original elements of nums1 end) and replacing n elements. 
This effectively appends the elements of nums2 to the end of nums1.

2. After splicing nums2 into nums1, the entire combined array needs to be sorted in non-decreasing order. 
The sort() method is used to accomplish this. The provided comparison function (a, b) => a - b 
ensures that the sorting is done in ascending order.

When the comparison function (a, b) => a - b is used:
- If the result of a - b is a negative number, it indicates that a should come before b in the sorted order. In other words, a is considered "smaller" than b, and it will be positioned earlier in the sorted array.
- If the result of a - b is a positive number, it indicates that b should come before a in the sorted order. In this case, a is considered "larger" than b, and it will be positioned later in the sorted array.
- If the result of a - b is zero, it means that a and b are equal, and their relative order is preserved.
By using this comparison function, the sort() method rearranges the elements in such a way that they are sorted in ascending order. Elements that are "smaller" (according to the comparison) come first, and elements that are "larger" come later.

After these steps, nums1 will contain the merged and sorted elements from both nums1 and nums2.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge2 = (nums1, m, nums2, n) => {
  console.log(nums1); // [ 4, 5, 7, 8, 0 ]
  nums1.splice(m, n, ...nums2);
  console.log(nums1); // [ 4, 5, 7, 8, 2, 3 ]
  nums1.sort((a, b) => a - b);
  return nums1;
};

console.log(merge2([4, 5, 7, 8, 0], 4, [2, 3], 2)); // [ 2, 3, 4, 5, 7, 8 ]
