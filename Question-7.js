//Write an ES6 function combineObjects with least amount of characters which merges two objects into one

const combineObjects =(obj12,obj22) => {
  let merge = {...obj12,...obj22}
  return merge;
}
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
// Expected Output: {a: 1, b: 2, c: 3, d: 4}