//Function as argument
function repeat(fn,n){
  for(var i = 0; i < n; i++){
    fn();
  }
}

function hello(){
  console.log('Hello World');
}


function goodbye(){
  console.log('Goodbye World');
}

repeat(hello,5);
repeat(goodbye,5);

//Higher Order Functions as return values

function createGreeter(greeting){
  
  return function(name) {
    console.log(greeting + name);
  }
};

var hello=createGreeter('Hello ');
var bonjour=createGreeter('Bonjour ');

hello('Anna');
bonjour('Sofia');

//Filter,map,foreach
var movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
movements = movements.filter(function(movement) {
    return movement[0] >= 0 && movement[1] >= 0;
});


distances = movements.map(function(movement) {
    return movement[0] + movement[1];
});

distances.forEach(function(distance) {
    console.log(distance);
});
