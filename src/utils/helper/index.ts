import { StrikeData } from "../types";

export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

export function findUpperBound(data: StrikeData[]) {
  let max = -1;

  data.forEach((item) => {
    if (item.call.oi_lakh > max) max = item.call.oi_lakh;
    if (item.put.oi_lakh > max) max = item.put.oi_lakh;
  });

  return max;
}
