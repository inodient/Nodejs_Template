function Person( first, last, age, eye ){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye;
  this.returnPerson = function(){
    return this.firstName + " " + this.lastName + " " + this.age + " " + this.eye;
  }
}

Person.prototype.gender = "mail";

var me = new Person( "Changho", "Kang", 33, "Brown" );

console.log( me.returnPerson() + " " + me.gender );

debugger;

var you = new Person( "Love", "L", 31, "Brown" );

you.sex = "girl";

console.log( you.returnPerson() + " \v" + you.gender );


/*
[[ String ]]
1. Special Character
  \' quote
  \" double quote
  \\ back Slash
2. Escape Character
  \b backslash
  \r carriage Return
  \f from Feed
  \t horizontal Tabulator
  \v vertical Tabulator

[[ Number ]]
1. NaN / Infinity / -Infinity --> Number
2. Number(parameter); parseInt(parameter); parseFloat(parameter) --> Global Methods
3. valueOf
In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
There is no reason to use it in your code.
All JavaScript data types have a valueOf() and a toString() method.




[[ Random ]]
1. Math.random()
2. Math.floor( Math.random() * 10 ) // 0 - 9
  Math.floor( Math.random() * 11 ) // 0 - 10
  Math.floor( Math.random() * 100 ) // 0 - 99
  Math.floor( Math.random() * 101 ) // 0 - 100
  Math.floor( Math.random() * 10) + 1 // 1 - 10
  Math.floor( Math.random() * 100 ) + 1 // 1 - 100
3. function getRndNumber(){
  return Math.floor( Math.random() * (max - min) ) + min;
}
4. function getRndNumber(){
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

[[ Array ]]
1. var Person[];
  Person["firstName"] = "Changho";
  Person["lastName"] = "Kang";
  ==> Redefine to object automatically
2. Recognize Array
  Array.isArray( Person ); // Using Class Method
  x.constructor.toString().indexOf("Array") > -1 // Using constructor property
  x instanceof Array // Using instanceof Operator
3. Sort
  var Points = [40, 100, 1, 5, 25, 10];
  points.sort( function(a, b){ return a - b } ); // Using comparison function
4. Sorting Random
  points.sort( function(a, b){ 0.5 - Math.random() } );

[[ Type Conversion ]]
1. Number --> String
  String( 100 + 23 ) = ( 100 + 23 ).toString()
  Number methods
    toFixed();
    toPrecision();
    toExponential();
2. Boolean --> String
  String( false ) = false.toString();
3. Dates --> String
  String( Date() ) == Date().toString();
  Date methods
    getDate();
    getDay();
    getFullYear();
    getHour();
    getMilliseconds();
    getMinutes();
    getMonth();
    getSeconds();
    getTime();
4. String --> Number
  (1) Global methods
    Number( "12345" );
    parseInt( "123" );
    parseFloat( "123" );
  (2) unary + operator
5. Boolean --> Number
  (1) Global methods
    Number( false );
6. Dates --> Number
  (1) Number( d ) == d.getTime();

[[ Bitwise ]]
1. JavaScript bitwise operations works on 32 bits signed integers.
2. Negative numbers are stored in two's complement format.
  This means that a negative number is the bitwise NOT of the number plus 1.
3. Decimal --> Binary
  function dec2bin( dec ){
    return ( dec >>> 0 ).toString( 2 );
  }
4. Binary --> Decimal
  function bin2dec( bin ){
    return parseInt( bin, 2 ).toString( 10 );
  }
5. differences btw >>>, >> and <<
  (1) << : This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:
  (2) >> : This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:
  (3) >>> : This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:

[[ Error ]]
try{

} catch( err ){

} finally{

}
1. Error object has 2 properties
  name / message
2. Error values enables in name
  EvalError
  RangeError
  ReferenceError
  SyntaxError
  TypeError
  URIError

[[ debugging ]]
debugger;

[[ Function ]]
1. Anonymous function
  var x = function( a, b ){ return a * b };
  var z = x( 4, 3 );
2. Function() constructor --> To Be Avoided
  var myFunction = new Function("a", "b", "return a * b");
3. Self Invoking Function
  ( function() { console.log( "Self Invoking") } )();
4. The typeof operator in JavaScript returns "function" for functions.
  But, JavaScript functions can best be described as objects.
  JavaScript functions have both properties and methods.
  The arguments.length property returns the number of arguments received when the function was invoked:
5. Arguments objects
  JavaScript functions have a built-in object called the arguments object.
  The argument object contains an array of the arguments used when the function was called (invoked).
  This way you can simply use a function to find (for instance) the highest value in a list of numbers:
  var x = findMax( 1,2,3,4,5 );

  function findMax(){
    var i = 0;
    var max = -Infinity;

    for( i=0; i<arguments.length; i++ ){
      if( arguments[i] > max ){
        max = arguments[i];
      }
    }

    return max;
  }
6. Arguments are Passed by Value vs Objects are Passed by Reference
7. this
  In JavaScript, the thing called this, is the object that "owns" the current code.
  The value of this, when used in a function, is the object that "owns" the function.
8. Invoking functions with function methods
  In JavaScript, functions are objects. JavaScript functions have properties and methods.
  call() and apply() are predefined JavaScript function methods.
  Both methods can be used to invoke a function, and both methods must have the owner object as first parameter.
  Both methods take an owner object as the first argument. The only difference is that call() takes the function arguments separately, and apply() takes the function arguments in an array.

  In JavaScript strict mode, the first argument becomes the value of this in the invoked function, even if the argument is not an object.
  In "non-strict" mode, if the value of the first argument is null or undefined, it is replaced with the global object.
  With call() or apply() you can set the value of this, and invoke a function as a new method of an existing object.
9. JavaScript Closure
  var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
  })();

  add();
  add();
  add();

  The variable add is assigned the return value of a self-invoking function.
  The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
  This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
  This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
  The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
  A closure is a function having access to the parent scope, even after the parent function has closed.



*/


var d = new Date();
console.log( d.getDay() );

var n  = 3.141582;
console.log( n.toExponential(2) );

console.log( typeof Number("12345") );
console.log( parseInt("123") );
console.log( parseFloat("123.123") );

var y = "5";
var x = + y;
console.log( x + " " + typeof x );


var x = findMax( 1,2,3,4,512312312 );

function findMax(){
  var i = 0;
  var max = -Infinity;

  for( i=0; i<arguments.length; i++ ){
    if( arguments[i] > max ){
      max = arguments[i];
    }
  }

  return max;
}

console.log( x );
