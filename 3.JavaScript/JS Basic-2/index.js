console.log('Theek Hai Sab');

//  object creation
/*
let reactangle = {
      length : 1,
      breadth : 2,
    
      draw: function(){
         console.log('drawing reactangle');
      }
};

*/
//  factory function

function createRectangle(len,bre){

   return reactangle = {
        length : len,
        breadth : bre,
      
        draw(){
           console.log('drawing reactangle');
        }
  };

}

let rectangleObj1 = createRectangle(30,25);
let rectangleObj2 = createRectangle(5,15);
let rectangleObj3 = createRectangle(21,13);

console.log('length:',rectangleObj1.length);
console.log('breadth:',rectangleObj1.breadth);
console.log(rectangleObj1.draw());

//  camalCase-->> numberOfStudents

//  constructor Function 
        //-->> Pascal Notation-> first letter of every word is capital -> NumberOfStudents

function Reactangle(){
     this.length = 1;
     this.breadth = 2;

     this.draw = function(){
        console.log('draw constructor');
     }
}
//  object creation using constructor funtion

let rectangleObj4 = new Reactangle();
// dynamic nature of object 

rectangleObj4.color = 'yellow'; // -->> add an properties
console.log(rectangleObj4);
delete rectangleObj4.color ; // -->> removed an properties
console.log(rectangleObj4);

let React1 = new Function(
    'length','breadth',
    ` this.length = length;
      this.breadth = breadth;

    this.draw = function(){
       console.log('draw constructor');
    }`
);

 let rect = new React1(40,67);
 console.log(rect.length);

// premitive types -->> copy created 
/*
 let a = 10;
 let b = a;
 a++;
 console.log(a);
 console.log(b);
 */

//  Reference type -->> Point same address 
//  let a = {value:10};
//  let b = a;
//  a.value++;

//  console.log(a.value);
//  console.log(b.value);

let a = 10;
function inc(a){ // pass by value-->> copy created
    a++;
}
inc(a);
console.log(a);


// pass by referance-->> point same memory address
let b = {value:20};
function inc2(b){
    b.value++;

}
inc2(b);
console.log(b.value);


let square = {
     length : 2,
     breadth: 4
};

//  for-in loop

for(let key in square){
    // key are reflected through key variable
    // values are reflected through square[key]
    console.log(key,square[key]);
}

//  for-of loop 
 for(let key of Object.entries(square)){
      console.log(key);
 }

 if('color' in square){
    console.log('Present');
 }else{
    console.log('absent');
 }

//   object cloning 
//     #1 using iteration
  let src = {
    a:10,
    b:20,
    c:30
  };

  let dest = {};
  for(let key in src){
    dest[key] = src[key];
  }

  console.log(dest);
  src.a++;
  console.log(dest);
  
//   #2 using assign
  let src1 = {
    a:11,
    b:12,
    c:13
  };
   
  let src2 = {value :25};

  let dest1 = Object.assign({},src1,src2);
  console.log(dest1);
  src1.a++;
  console.log(dest1);

//   #3 using spread

let src3 = {
    a : 15,
    b: 16,
    c : 18
};

let dest3 = {...src3};

console.log(dest3);
 dest3.a++;
  console.log(dest3);


