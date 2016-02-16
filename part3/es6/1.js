//一、作用域
let x = 0;
for (var i = 0; i < 5; i++) {
  let x = i;
  console.log("let in for ",x);
}
console.log("gloabl let:",x);


//二、常量
//深度定义对象属性中的常量不能被修改
Object.deepFreeze = function(object){
  Object.freeze(object);
  Object.keys(object).forEach(function(key){
    if (typeof(object[key])=='object') {
      return Object.deepFreeze(object[key]);
    }
  });
}

//使用原生可以进行对OBJECT中的属性值进行修改
const foo = Object.freeze({a:[1]});
foo.a.push(2);
console.log(foo.a);
try {
  const foo2 = Object.deepFreeze({a:[1]});
  foo2.a.push(2);
} catch (e) {
  console.log(e.message);
}
//三、常量赋值
var [a,b,c] = [1,2,3];
//相当于var a=1,b=2,c=3;
console.log('a:',a,'b:',b,'c:',c);
//四、正则表达式 --大于OXFFFF的字符
//在es6中u是用来进行处理大于OXFFFF的字符
let s = '𠮷';
console.log('𠮷es5中是否为中文:',/^.$/.test(s));
console.log('𠮷es6中是否为中文:',/^.$/u.test(s));
//五、字符串处
//查找
  //includes()：返回布尔值，表示是否找到了参数字符串
  //startsWith():返回布尔值，表示参数字符串是否在源字符串的头部
  //endsWith():返回布尔值，表示参数字符串是否在源字符的尾部
let oStr="this is old string";
console.log(oStr.includes('is'));
console.log(oStr.startsWith('this'),oStr.startsWith('string'));
console.log(oStr.endsWith('this'),oStr.endsWith('string'));
//字符串模板 - 此方法比较实用 -使用``号进行处理
let user = {name:'tom'};
console.log('模板输出：',`${user.name}`);
//五、数组的扩展
  //keys方法：
  for(let index of ['a','b'].keys()){
    console.log('arr keys method:',index);
  }
  //values方法：
  // for (let elem of ['a', 'b'].values()) {
  //   console.log(elem);
  // }

  //ectries方法：
  for (let [index,elem] of ['a','b'].entries()) {
    console.log('entries method:',index,elem);
  }
  //新数组的方法
  let a1 = [1,2,3,4,5];
  let a2 = a1.map((i) => { return i*2 });
  console.log('arr map method:',a2);
  let a3 = a1.filter((i) => {return i>2 });
  console.log('arr filter method:',a3);
  let a4 = a1.filter((i) => {return i>2 }).map((i)=>{return i*2});
  console.log('arr filter and map method:',a4);

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
  function f(x,y){
    return {x,y,method(){return 1;}}
  }
  console.log(f(1,2),f(1,2).method());
  //上述写法相当于
  // function f(x,y){
  //   return {x,y,method:function(){return 1}};
  // }
//允许使用变量进行定义对象
  let propKey = 'foo';
  let obj = {
    [propKey]:true,
    ['a'+'bc']:123,
    ['h'+'ello'](){
      return 'hi';
    }
  }
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
function log(x,y){
  y = y || 'World';
  console.log(x,y);
}
//ES6:
function logEs6(x,y='World') {
  console.log(x,y);
}
function fooDefault({x, y = 5}) {
  console.log(x, y);
}
fooDefault({}) // undefined, 5
fooDefault({x: 1}) // 1, 5
fooDefault({x: 1, y: 2}) // 1, 2
//新增rest方法参数
function add(...values){
  let sum = 0;
  for(let val of values){
    sum += val;
  }
  return sum;
}
var sumAdd = add(2,3,5);
console.log('sum add method:',sumAdd);
//“...”运算符
let varArr = [..."hello"];
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
function timeout(ms){
  return new Promise((resolve)=>{
    setTimeout(resolve,ms);
  });
}

timeout(100).then(()=>{
  console.log('done');
}).catch(function(e){
  console.log(e);
});

//对象
//ES5:
function Point(x,y){
  this.x = x;
  this.y = y;
}
Point.prototype.toString=function(){
  return '('+this.x+','+this.y+')';
}
var point = new Point(2,3);
console.log('es5 class:',point);
//ES6:
class PointEs6{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  toString(){
    return '('+this.x+','+this.y+')';
  }
}
var pointEs6 = new PointEs6(2,3);
console.log('es6 class:',pointEs6);
//对象继承 - 调用对象方法使用super
class ColorPoint extends PointEs6{
  constructor(x,y,color){
    super(x,y);
    this.color = color;
  }
  toString(){
    return this.color + ' ' + super.toString();
  }
}

let colorPoint = new ColorPoint(2,3,'red');
console.log('class extends:',colorPoint);
//类静态方法：
class StaticClass {
  static classMethod(){
    console.log('this is class static method!');
  }
}
StaticClass.classMethod();
var staticClass = new StaticClass();
try {
  staticClass.classMethod();
} catch (e) {
  console.log('调用staticClass.classMethod方法失败');
}
//子类继续调用静态方法
class SubClass extends StaticClass{

}
console.log('子类调用静态方法：');
SubClass.classMethod();

//CMD,AMD,ES6 - EXPORTS
import { firstName,lastName,year} from './esprofile';
console.log(firstName,lastName,year);
