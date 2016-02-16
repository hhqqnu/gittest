var snack = 'Meow Mix';
function getFood(food){
  if (food) {
    var snack = 'Firskies';
    return snack;
  };
  return snack;
}
var f=getFood(false);
console.log(f);

let snack2 = 'Meow Mix';

function getFood2 (food) {
  if (food) {let snack2='Firskies';return snack2;}
  return snack2;
}
var f2 = getFood2(false);
console.log(f2);
