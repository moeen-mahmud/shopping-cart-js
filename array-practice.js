const arrBooks = [
  "Eloquent Javascript",
  "Javascript & JQuery",
  "Javascript The Good Part",
  "You don't know javascript",
  "Composing Software",
  "High-Performance Browser Networking",
];

function searchItem(keyword, array) {
  result = [];
  for (const item of array) {
    if (item.includes(keyword)) {
      result.push(item);
    }
  }
  return result;
}

// console.table(searchItem("javascript", arrBooks));

const arrNums = [12, 1, 4, 16, 21, 19, 23, 10, 54];

function sortedNum(arr) {
  const result = arr.sort(function (a, b) {
    return a - b;
  });
  return result;
}

// console.table(sortedNum(arrNums));
