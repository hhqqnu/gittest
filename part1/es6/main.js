//babeljs.io
//installed npm babel -g
//watch compiled
//babel main.js --watch --out-file compiled.js

let x='Hey JSB';
var i=0;
function say(){
  let x='tom';
  for(let i=0;i<5;i++){
    console.log(i);
  }
  console.log(x);
  console.log(i);
}
say();
console.log(x);


function varTest(){
  var x=31;
  if (true) {
    var x=71;
    console.log(x);
  }
  console.log('am var',x);
}

varTest();

function letTest(){
  let x=31;
  if (true) {
    let x=71;
    console.log(x);
  }
  console.log('am let',x);
}

letTest();

//-----------------

class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }

  checkIdentity(){
    if (this.name==='tom') {
      console.log('Alex,you rock man!');
    }else{
      console.log('Well,yout still rock!');
    }
  }
}

//var person=new Person('tom',28);
//person.checkIdentity();

class Child extends Person{
  constructor(name,age,school,gender){
    super(name,age);
    this.school=school;
    this.gender=gender;
  }

}
//new Child('222').checkIdentity();
//-----------------
let myPromise=function () {
  return new Promise(function(resolve, reject) {
    let number=5;
    if (number<4) {
      resolve('Promise waw resolved');
    }else{
      reject(new Error('An error occured,Promise was rejected!'));
    }
  });
}
myPromise().then(function(resolved){
  console.log(resolved)
}).catch(function(err){
  console.log(err);
});


var promiseOne=new Promise(function(resolve,reject){
  resolve('First promise bro.');
});

var promiseTwo=new Promise(function(resolve,reject){
  resolve('Second promise bro.');
});

Promise.all([promiseOne,promiseTwo]).then(function (data) {
  //console.log(data);
  let [first,second] =data;

  console.log(first);
  console.log(second);
});

//--------
let arr=[1,'t',[4,5,6],'111'];
let [a,b,c,d] = arr;
console.log(a,b,c,d);

let obj = {
  name:'tom',
  age:1,
  other:'other'
};
let {
  name:nName,
  age:nAge
} = obj;

console.log('get Name:',nName,'get Age:',nAge);
