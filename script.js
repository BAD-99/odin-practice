const defaultMergeArr = "3, 2, 1, 13, 8, 5, 0, 1, 27, 570, 23, 1";
const csvRegex = /^[0-9.,]+$/;

/**
 *
 * @param {string} input
 */

function validate(input, regex) {
  if (!regex) {
    regex = /^[0-9.]+$/;
  }
  if (input.match(regex)) {
    return true;
  }
  return false;
}

function sumTo(n) {
  if (n <= 1) {
    return n;
  }
  return n + sumTo(n - 1);
}

function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

function fib(n) {
  if (n <= 2) {
    return [1, 1];
  }
  let f = fib(n - 1);
  return [f[0] + f[1], f[0]];
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  if (list.next != null) {
    printList(list.next);
  }
}

function fibsRec(n) {
  if (n <= 2) {
    return n == 2 ? [0, 1] : [0];
  }
  let f = fibsRec(n - 1);
  f.push(f[f.length - 1] + f[f.length - 2]);
  return f;
}

function fibs(n) {
  if (n <= 2) {
    return n == 2 ? [0, 1] : [0];
  }
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}
/**
 *
 * @param {string} csv
 * @returns {[number]}
 */
function parseCSVToArray(csv) {
  csv = csv.replace(/\s+/g, "");
  console.log(csv);
  if (validate(csv, csvRegex) != true) {
    throw new Error("Input is not comma seperated numbers!");
  }
  return csv.split(",").map((val) => Number(val));
}

/**
 *
 * @param {[number]} arr
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let half = parseInt(arr.length / 2);
  let first = arr.slice(0, half);
  first = mergeSort(first);
  let last = arr.slice(half);
  last = mergeSort(last);
  let firstIndex = 0;
  let lastIndex = 0;
  let sorted = [];
  while (firstIndex < first.length && lastIndex < last.length) {
    if (first[firstIndex] < last[lastIndex]) {
      sorted.push(first[firstIndex]);
      firstIndex++;
    } else {
      sorted.push(last[lastIndex]);
      lastIndex++;
    }
  }
  while (firstIndex < first.length) {
    sorted.push(first[firstIndex]);
    firstIndex++;
  }
  while (lastIndex < last.length) {
    sorted.push(last[lastIndex]);
    lastIndex++;
  }

  return sorted;
}
console.table(mergeSort(parseCSVToArray(defaultMergeArr)));