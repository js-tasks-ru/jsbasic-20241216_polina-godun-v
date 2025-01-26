function getMinMax(str) {
  let strings = str.split(' ');
  let nums = strings
    .filter((value) => isFinite(value)) 
    .map((value) => +value) 
  nums.sort((a, b) => {
    if (a > b) { return 1; }
    if (a < b) { return -1; }
    return 0;
  })
  let lastElementIndex = nums.length - 1; 
  let max = nums[lastElementIndex];
  let min = nums[0];
  return { min, max };
};

/*function getMinMax(str) {
  let arr = str.split(" ").map(Number === isFinite); 
  let max = Math.max(arr);
  let min = Math.min(arr);
let result = Array.from(min, max);
}; 
Оставлю свою попытку решения */