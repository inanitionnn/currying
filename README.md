# TwoTasks

Two easy tasks before you apply for an interview

1. Задача: не змінюючи логіки, змінити структуру коду, щоби вона відповідала принципу DRY:
   ctx.prototype.**applyStyleState = function (styleState) {
   var keys = Object.keys(styleState), i, key;
   for (i=0; i<keys.length; i++) {
   key = keys[i];
   this[key] = styleState[key];
   }
   };
   ctx.prototype.**setDefaultStyles = function () {
   var keys = Object.keys(STYLES), i, key; // keys of object - object selection
   for (i=0; i<keys.length; i++) {
   key = keys[i];
   this[key] = STYLES[key].canvas; // field selection
   }
   };
   ctx.prototype.\_\_getStyleState = function () {
   var i, styleState = {}, keys = Object.keys(STYLES), key;
   for (i=0; i<keys.length; i++) {
   key = keys[i];
   styleState[key] = this[key];
   }
   return styleState;
   };

2. Друга задача:

const multiply = (a,b,c) => a*b*c;
const add = (a,b,c,d,e) => a+b+c+d+e;

const curry = (f) => { /_ write your solution here _/ }

curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5) // should be true
curry(multiply)(1)(2)(3) == multiply(1,2,3) // should be true

Гарного дня! :)
