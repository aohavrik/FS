let arr = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]]

console.log('flat');
let flat = arr.flat(Infinity)
console.log(flat);

console.log('reverse');
let sort = flat.sort((a, b) => a-b)
let reverse = sort.reverse()
console.log(reverse);

console.log('includes');
let incl = reverse.includes(3)
console.log(incl);

console.log('map');
let map_incl = reverse.map((el, ind, arr) => el*2)
console.log(map_incl);


console.log('reduce');
let redArr = arr.reduce((prev, curr) => {
    console.log(prev, curr);
    
    return prev+curr
})
console.log(redArr);