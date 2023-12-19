/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
*/

// ChatGPT Output recommended Boyer-Moore Majority Voting Algorithm
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }

  // At this point, the candidate is the potential majority element,
  // but we need to verify if it indeed appears more than n/2 times.
  count = 0;
  for (let num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return candidate;
  }

  // If the majority element always exists, we don't need to handle the case
  // where the candidate is not the majority element.
};

console.log(majorityElement([3, 2, 3]));

/* ℹ️
Let's break down the Boyer-Moore Voting Algorithm approach step by step using the example array [3, 2, 3].

1. Initialize candidate and count:

candidate represents the potential majority element.
count keeps track of the net count of candidate in the array.
At the beginning, both candidate and count are set to null and 0, respectively.

2. Iterate through the array:

Start iterating through the array [3, 2, 3].
For the first element, num = 3:
Since count is 0, set candidate to 3 and increment count to 1.

3. Continue iterating:

For the second element, num = 2:
Since candidate is not equal to num, decrement count to 0.

4. Continue iterating:

For the third element, num = 3:
Since candidate is the same as num, increment count to 1.

5. Verify the candidate:

After iterating through the array, the candidate is 3 and the count is 1.
Now, we need to verify if candidate appears more than ⌊n / 2⌋ times.

6. Second pass verification:

Iterate through the array again and count the occurrences of candidate.
Count the occurrences of 3 in the array: [3, 2, 3]. Count is 2.

7. Compare the count with ⌊n / 2⌋:

The array length n is 3, so ⌊n / 2⌋ is 1.
The count of 3 is greater than ⌊n / 2⌋ (2 > 1), so 3 is the majority element.

8. Return the majority element:

The majority element is 3, so return 3 as the output.
By the end of this process, we have determined that the majority element in the array [3, 2, 3] is 3. 
The Boyer-Moore Voting Algorithm efficiently finds the majority element using two passes through the array, 
with constant space complexity
*/

// Another solution: https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/
const findMajority = (nums) => {
  let count = 0;
  let candidate = -1;

  // Finding majority candidate
  for (let index = 0; index < nums.length; index++) {
    if (count == 0) {
      candidate = nums[index];
      count = 1;
      console.log(candidate);
    } else {
      if (nums[index] == candidate) count++;
      else count--;
    }
  }

  // Checking if majority candidate occurs more than
  // n/2 times
  count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == candidate) count++;
  }
  if (count > nums.length / 2) return candidate;
  return -1;

  // The last for loop and the if statement step can
  // be skip if a majority element is confirmed to
  // be present in an array just return candidate
  // in that case
};

console.log(findMajority([3, 2, 3]));
