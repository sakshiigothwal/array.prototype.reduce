if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(cb, initialValue) {
    let acc = initialValue;
    let start = 0;

    for (let i = start; i < this.length; i++) {
      acc = cb(acc, this[i], i, this); 
    }

    return acc;
  };
}

const arr = [4, 6, 19, 20, 22];
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);
