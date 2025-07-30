function rightbyk(k) {
  let arr = [1, 2, 3, 4, 5];
  k = k % arr.length;
  for (j = 0; j <= k; j++) {
    copy = arr[arr.length - 1];
    for (i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = copy;
  }
  console.log(arr);
}
rightbyk(2)