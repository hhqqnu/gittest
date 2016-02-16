//一、作用域
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _obj;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//CMD,AMD,ES6 - EXPORTS

var _esprofile = require('./esprofile');

var x = 0;
for (var i = 0; i < 5; i++) {
  var _x = i;
  console.log("let in for ", _x);
}
console.log("gloabl let:", x);

//二、常量
//深度定义对象属性中的常量不能被修改
Object.deepFreeze = function (object) {
  Object.freeze(object);
  Object.keys(object).forEach(function (key) {
    if (typeof object[key] == 'object') {
      return Object.deepFreeze(object[key]);
    }
  });
};

//使用原生可以进行对OBJECT中的属性值进行修改
var foo = Object.freeze({ a: [1] });
foo.a.push(2);
console.log(foo.a);
try {
  var foo2 = Object.deepFreeze({ a: [1] });
  foo2.a.push(2);
} catch (e) {
  console.log(e.message);
}
//三、常量赋值
var a = 1;
var b = 2;
var c = 3;

//相当于var a=1,b=2,c=3;
console.log('a:', a, 'b:', b, 'c:', c);
//四、正则表达式 --大于OXFFFF的字符
//在es6中u是用来进行处理大于OXFFFF的字符
var s = '𠮷';
console.log('𠮷es5中是否为中文:', /^.$/.test(s));
console.log('𠮷es6中是否为中文:', /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(s));
//五、字符串处
//查找
//includes()：返回布尔值，表示是否找到了参数字符串
//startsWith():返回布尔值，表示参数字符串是否在源字符串的头部
//endsWith():返回布尔值，表示参数字符串是否在源字符的尾部
var oStr = "this is old string";
console.log(oStr.includes('is'));
console.log(oStr.startsWith('this'), oStr.startsWith('string'));
console.log(oStr.endsWith('this'), oStr.endsWith('string'));
//字符串模板 - 此方法比较实用 -使用``号进行处理
var user = { name: 'tom' };
console.log('模板输出：', "" + user.name);
//五、数组的扩展
//keys方法：
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = ['a', 'b'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var index = _step.value;

    console.log('arr keys method:', index);
  }
  //values方法：
  // for (let elem of ['a', 'b'].values()) {
  //   console.log(elem);
  // }

  //ectries方法：
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"]) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = ['a', 'b'].entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _step2$value = _slicedToArray(_step2.value, 2);

    var index = _step2$value[0];
    var elem = _step2$value[1];

    console.log('entries method:', index, elem);
  }
  //新数组的方法
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var a1 = [1, 2, 3, 4, 5];
var a2 = a1.map(function (i) {
  return i * 2;
});
console.log('arr map method:', a2);
var a3 = a1.filter(function (i) {
  return i > 2;
});
console.log('arr filter method:', a3);
var a4 = a1.filter(function (i) {
  return i > 2;
}).map(function (i) {
  return i * 2;
});
console.log('arr filter and map method:', a4);

//ES6 map filter
// var a1 = [1, 2, 3, 4];
// var a2 = [for (i of a1) i * 2];
// var a3 = [for (i of a1) if (i > 2) i];
// var a4 = [for (i of a1) if (i > 2) i * 2];//同时实现ES5中的map和filter
//
// a2 // [2, 4, 6, 8]
// a3 // [3, 4]
// a4 // [6,8]
//六:对象扩展
function f(x, y) {
  return { x: x, y: y, method: function method() {
      return 1;
    } };
}
console.log(f(1, 2), f(1, 2).method());
//上述写法相当于
// function f(x,y){
//   return {x,y,method:function(){return 1}};
// }
//允许使用变量进行定义对象
var propKey = 'foo';
var obj = (_obj = {}, _defineProperty(_obj, propKey, true), _defineProperty(_obj, 'a' + 'bc', 123), _defineProperty(_obj, 'h' + 'ello', function () {
  return 'hi';
}), _obj);
console.log(obj);
//新增Symbol类型来解决属性名冲突
var s2 = Symbol();
var s2 = Symbol();
//s1 === s2 // false
// 有参数的情况
//var s1 = Symbol("foo");
//var s2 = Symbol("foo");

//s1 === s2 // false
//函数扩展
//ES5:
function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}
//ES6:
function logEs6(x) {
  var y = arguments.length <= 1 || arguments[1] === undefined ? 'World' : arguments[1];

  console.log(x, y);
}
function fooDefault(_ref) {
  var x = _ref.x;
  var _ref$y = _ref.y;
  var y = _ref$y === undefined ? 5 : _ref$y;

  console.log(x, y);
}
fooDefault({}); // undefined, 5
fooDefault({ x: 1 }); // 1, 5
fooDefault({ x: 1, y: 2 }); // 1, 2
//新增rest方法参数
function add() {
  var sum = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }

    for (var _iterator3 = values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var val = _step3.value;

      sum += val;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return sum;
}
var sumAdd = add(2, 3, 5);
console.log('sum add method:', sumAdd);
//“...”运算符
var varArr = [].concat(_toConsumableArray("hello"));
console.log(varArr);
//Generator函数
// function * helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }
// var hw = helloWorldGenerator();
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
//新增Promise对象
function timeout(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

timeout(100).then(function () {
  console.log('done');
})["catch"](function (e) {
  console.log(e);
});

//对象
//ES5:
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function () {
  return '(' + this.x + ',' + this.y + ')';
};
var point = new Point(2, 3);
console.log('es5 class:', point);
//ES6:
var PointEs6 = (function () {
  function PointEs6(x, y) {
    _classCallCheck(this, PointEs6);

    this.x = x;
    this.y = y;
  }

  _createClass(PointEs6, [{
    key: "toString",
    value: function toString() {
      return '(' + this.x + ',' + this.y + ')';
    }
  }]);

  return PointEs6;
})();

var pointEs6 = new PointEs6(2, 3);
console.log('es6 class:', pointEs6);
//对象继承 - 调用对象方法使用super

var ColorPoint = (function (_PointEs6) {
  _inherits(ColorPoint, _PointEs6);

  function ColorPoint(x, y, color) {
    _classCallCheck(this, ColorPoint);

    _get(Object.getPrototypeOf(ColorPoint.prototype), "constructor", this).call(this, x, y);
    this.color = color;
  }

  _createClass(ColorPoint, [{
    key: "toString",
    value: function toString() {
      return this.color + ' ' + _get(Object.getPrototypeOf(ColorPoint.prototype), "toString", this).call(this);
    }
  }]);

  return ColorPoint;
})(PointEs6);

var colorPoint = new ColorPoint(2, 3, 'red');
console.log('class extends:', colorPoint);
//类静态方法：

var StaticClass = (function () {
  function StaticClass() {
    _classCallCheck(this, StaticClass);
  }

  _createClass(StaticClass, null, [{
    key: "classMethod",
    value: function classMethod() {
      console.log('this is class static method!');
    }
  }]);

  return StaticClass;
})();

StaticClass.classMethod();
var staticClass = new StaticClass();
try {
  staticClass.classMethod();
} catch (e) {
  console.log('调用staticClass.classMethod方法失败');
}
//子类继续调用静态方法

var SubClass = (function (_StaticClass) {
  _inherits(SubClass, _StaticClass);

  function SubClass() {
    _classCallCheck(this, SubClass);

    _get(Object.getPrototypeOf(SubClass.prototype), "constructor", this).apply(this, arguments);
  }

  return SubClass;
})(StaticClass);

console.log('子类调用静态方法：');
SubClass.classMethod();
console.log(_esprofile.firstName, _esprofile.lastName, _esprofile.year);
