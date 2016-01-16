//babeljs.io
//installed npm babel -g
//watch compiled
//babel main.js --watch --out-file compiled.js

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var x = 'Hey JSB';
var i = 0;
function say() {
  var x = 'tom';
  for (var _i = 0; _i < 5; _i++) {
    console.log(_i);
  }
  console.log(x);
  console.log(i);
}
say();
console.log(x);

function varTest() {
  var x = 31;
  if (true) {
    var x = 71;
    console.log(x);
  }
  console.log('am var', x);
}

varTest();

function letTest() {
  var x = 31;
  if (true) {
    var _x = 71;
    console.log(_x);
  }
  console.log('am let', x);
}

letTest();

//-----------------

var Person = (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  //var person=new Person('tom',28);
  //person.checkIdentity();

  _createClass(Person, [{
    key: 'checkIdentity',
    value: function checkIdentity() {
      if (this.name === 'tom') {
        console.log('Alex,you rock man!');
      } else {
        console.log('Well,yout still rock!');
      }
    }
  }]);

  return Person;
})();

var Child = (function (_Person) {
  _inherits(Child, _Person);

  function Child(name, age, school, gender) {
    _classCallCheck(this, Child);

    _get(Object.getPrototypeOf(Child.prototype), 'constructor', this).call(this, name, age);
    this.school = school;
    this.gender = gender;
  }

  //new Child('222').checkIdentity();
  //-----------------
  return Child;
})(Person);

var myPromise = function myPromise() {
  return new Promise(function (resolve, reject) {
    var number = 5;
    if (number < 4) {
      resolve('Promise waw resolved');
    } else {
      reject(new Error('An error occured,Promise was rejected!'));
    }
  });
};
myPromise().then(function (resolved) {
  console.log(resolved);
})['catch'](function (err) {
  console.log(err);
});

var promiseOne = new Promise(function (resolve, reject) {
  resolve('First promise bro.');
});

var promiseTwo = new Promise(function (resolve, reject) {
  resolve('Second promise bro.');
});

Promise.all([promiseOne, promiseTwo]).then(function (data) {
  //console.log(data);

  var _data = _slicedToArray(data, 2);

  var first = _data[0];
  var second = _data[1];

  console.log(first);
  console.log(second);
});

//--------
var arr = [1, 't', [4, 5, 6], '111'];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];

console.log(a, b, c, d);

var obj = {
  name: 'tom',
  age: 1,
  other: 'other'
};
var nName = obj.name;
var nAge = obj.age;

console.log('get Name:', nName, 'get Age:', nAge);
