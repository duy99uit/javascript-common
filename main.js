var isPalindrome = function (x) {
  const a = x.toString();
  var res = 0;
  for (let i = a.length; i > 0; i--) {
    res = res + Math.pow(10, i - 1) * parseInt(a[i - 1]);
  }
  if (res / x === 1 || x === 0) {
    return true;
  } else {
    return false;
  }
};
