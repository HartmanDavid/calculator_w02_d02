console.log('hi');
var number = document.querySelectorAll('.number');
var operator = document.querySelectorAll('.operator');
var arrayMath=[];
var arrayEquation= [];//holds the full equastion b4 computing
var arrayStorage= [];// holds the numbers until a operator is selected
var colombia =0;
var displayCont = document.getElementById('display').innerHTML;
var arrayOperators = [];//holds operators

for (i=0; i<number.length; i++){ //clicking on a number
  number[i].addEventListener('click',selectNumber);
  console.log('whooopee!');
}
for (i=0; i<operator.length; i++){ //clicking on a operator
  if (operator[i].id == 'clear'){operator[i].addEventListener('click', function(){
    console.log('click');
    return displayCont= "hello";});
  }
  else if (operator[i].id == "equals") {operator[i].addEventListener('click', equalsFn);
  }
  else if (operator[i].id == "dot") {operator[i].addEventListener('click', dotFn);
  }
  else{operator[i].addEventListener('click',selectOperator);
  console.log('yeahhh!');}
}

function selectOperator(){ //called by operators
    console.log('operator');
    combineNumber();
    this.style.backgroundColor = 'pink';
    var that = this;
    function clearSquare(){
        that.style.backgroundColor = '#444';}
    window.setTimeout(clearSquare, 100);
    arrayEquation.push(this.innerHTML);
     //displayCont = arrayEquation;
}

function selectNumber(){ //called by numbers
  console.log('number');
  this.style.backgroundColor = 'lightblue';
  var that = this;
  function clearSquare(){that.style.backgroundColor = '#444';}
  window.setTimeout(clearSquare, 100);
  arrayStorage.push(parseInt(this.innerHTML));
  }

function combineNumber(){ //combines all indexies of arrayStorage to make a full interger
   for(i=0; i<arrayStorage.length; i++){
   var pow= arrayStorage.length;
   var jimmy= arrayStorage[i]*Math.pow(10,pow-(i+1));
   colombia = jimmy+ colombia;
  }
  arrayEquation.push(colombia);
  arrayStorage= [];
  colombia =0;
}

// function clearScreen(){
//     arrayEquation= [];
// }
//
function equalsFn(){combineNumber();
  for (i= 1; i<arrayEquation.length; i=i+2){arrayOperators.push(arrayEquation[i]);}
  if(!!arrayEquation.indexOf('x') || !!arrayEquation.indexOf('/')){
       if(!!arrayEquation.indexOf('+') || !!arrayEquation.indexOf('-')){
    console.log('true');}}
  }
// var aE = arrayEquation
// outcome = aE[0]+aE[1]+aE[3];
// console.log(outcome);}

function dotFn(){console.log('dot');}
