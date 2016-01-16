
require(['./bear.js'],function(bear){
  document.body.appendChild(bear[0]);
});



var fetch = require('./fetch');
var promise=fetch('1.txt')
promise.then(function(content){
  document.body.appendChild('<h1>'+content+'</h1>');
}).catch(function(err){
  document.body.appendChild('<h1>'+err+'</h1>');
})
