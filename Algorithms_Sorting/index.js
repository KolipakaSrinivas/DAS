// 1. BubbleSort

const array = [99, 4, 88, 22, 7, 1, 88, 44, 100, 34];

// function bubbleSort(nums) {
//   const length = nums.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (nums[j] > nums[j + 1]) {
//         let temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//     }
//   }
// }

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//       if(array[i] > array[j] ){
//         let temp = array[j]
//         array[j] = array[i]
//         array[i] = temp
//       }
//     }
//   }
// }

// bubbleSort(array)
// //2.selection sort
// // const array = [99, 4, 88, 22, 7, 1, 88, 44, 100, 34];

// function selectionSort(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let smallNum = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[smallNum] < nums[j]) {
//         smallNum = j;
//       }
//     }

//     let temp = nums[i];
//     nums[i] = nums[smallNum];
//     nums[smallNum] = temp;
//   }
// }

// selectionSort(array);
// console.log(array);

//3

function insertsationSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      for(let j = 1; j < i; i++) {
        if(arr[i] > arr[j-1] && arr[i]  < arr[j]){
          arr.splice(j,0,arr.splice(i,1)[0])
        }
      }
    }
  }
}

insertsationSort(array)
console.log(array);
