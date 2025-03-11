const multiply = (a, b, c) => a * b * c;
const add = (a, b, c, d, e) => a + b + c + d + e;

const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};

const curriedMultiply = curry(multiply);
const curriedAdd = curry(add);

console.log(curriedAdd(1, 2, 3)(4, 5) == add(1, 2, 3, 4, 5)); // true
console.log(curriedAdd(1)(2)(3)(4)(5) == add(1, 2, 3, 4, 5)); // true
console.log(curriedMultiply(1)(2)(3) == multiply(1, 2, 3)); // true
