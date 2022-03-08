// In a binary search algorithm, the array is halved on each step until the median is equal to the target value. 
// The algorithm traverses left or right of the median depending on the size target value.
// The time complexity of this algorithm is logarithmic ( O(log n) ) given the number of steps taken equals log of number of items in the array

let arr = []
// create an ordered list 
for (let i = 1; i <= 1500000; i++) {
    arr.push(i)
}

let startIndex = 0
let endIndex = arr.length -1
let target = 1499999

function binarySearch(arr, startIndex, endIndex, target, steps) {
    steps = steps + 1
    if (startIndex > endIndex) return [false, steps]
    let midIndex = Math.floor((startIndex + endIndex) / 2)
    if (arr[midIndex] === target) return [true, steps]
    if (target > arr[midIndex]) {
        return binarySearch(arr, midIndex + 1, endIndex, target, steps)
    }
    else {
        return binarySearch(arr, startIndex, midIndex - 1, target, steps)
    }
}

// Returns true / false based on target and the number of steps taken
console.log(binarySearch(arr, startIndex, endIndex, target, 0))


