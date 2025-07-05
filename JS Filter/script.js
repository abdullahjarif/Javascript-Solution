const data = [20, 30, 45, 25, 35, 50, 55, 40];
// data.map(function(item, index){
//     console.log(item);
    
// });

let result = data.filter(function(info){
    // return info !== 20;
    return info >= 30;
});
console.log(result); // info !== 20

console.log(data);

// filter return a array
