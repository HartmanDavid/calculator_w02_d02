console.log('hi');
var number = document.querySelectorAll('.number');
var operator = document.querySelectorAll('.operator');
var fnlAns=0;
var arrayEquation= [];//holds the full equastion b4 computing
var arrayStorage= [];// holds the numbers until a operator is selected
var colombia =0;
var display = document.getElementById('display');
var arrayOperators = [];//holds operators

for (i=0; i<number.length; i++){ //clicking on a number
  number[i].addEventListener('click',selectNumber);
}
for (i=0; i<operator.length; i++){ //clicking on a operator
  if (operator[i].id == 'clear'){operator[i].addEventListener('click', function(){
    arrayStorage = [];
    arrayOperators = [];
    arrayEquation = [];
    return display.innerHTML = '0';});
  }
  else if (operator[i].id == "equals") {operator[i].addEventListener('click', equalsFn);
  }
  else if (operator[i].id == "dot") {operator[i].addEventListener('click', selectNumber); //did referance dotFn, but changed here.
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
    display.innerHTML = display.innerHTML + ' ' + this.innerHTML;;
}

function selectNumber(){ //called by numbers
  if (this.innerHTML == '.'){arrayStorage.push('.');}
  else{
    this.style.backgroundColor = 'lightblue';
    var that = this;
    function clearSquare(){
      that.style.backgroundColor = '#444';}
    window.setTimeout(clearSquare, 100);
    arrayStorage.push(parseInt(this.innerHTML));
  }
  display.innerHTML = display.innerHTML + ' ' + this.innerHTML;
  }

function combineNumber(){ //combines all indexies of arrayStorage to make a full interger
  if(arrayStorage.indexOf('.') == -1){ combineIt(0,arrayStorage.length);
    arrayEquation.push(colombia);
    arrayStorage= [];
    colombia =0;
  }else{ console.log("Huston we have a decimal point!");
    console.log(combineIt(0, arrayStorage.indexOf('.'))); //+ '.' + combineIt(arrayStorage.indexOf('.')+1, arrayStorage.length)
    }
}
function combineIt(a, n){
      for(a=0; a<n; a++){
       var pow= n;
       var jimmy= arrayStorage[a]*Math.pow(10,pow-(a+1));
       colombia = jimmy+ colombia;}
  //  arrayEquation.push(colombia);
  //  arrayStorage= [];
  //  colombia =0;
 }


  // }else{console.log('huston we have a decimal point!');
  //       for(i=0; i<arrayStorage.length; i++){
  //       var pow= arrayStorage.length-1;
  //       var jimmy= arrayStorage[i]*Math.pow(10,pow-(i+1));
  //       colombia = jimmy+ colombia;}
  // }


function equalsFn(){combineNumber();
    for (i= 1; i<arrayEquation.length; i=i+2){arrayOperators.push(arrayEquation[i]);}
    if(arrayEquation.indexOf('x')>(-1) || arrayEquation.indexOf('/')>(-1)){ // this can be made into a function to condense code
       if(!!arrayEquation.indexOf('+') || !!arrayEquation.indexOf('-')){
          console.log('* or / is true'); // I need more shit here :-0 I presume and another function
        }else{
            for (i=0; i<arrayEquation.length; i++){
              switch (arrayEquation[i]){
                 case 'x' : (arrayEquation[i-1]* arrayEquation[i+1]);
                 break;
                 case '/' : (arrayEquation[i-1]/ arrayEquation[i+1]);
                 break;}
            }
        }
    }else{console.log('last esle');for (i=0; i<arrayEquation.length; i++){
                switch (arrayEquation[i]){
                 case '+' : fnlAns = arrayEquation[i-1]+ arrayEquation[i+1];
                 break;
                 case '-' : fnlAns =(arrayEquation[i-1]- arrayEquation[i+1]);
                 break;
                }
          }
    }
console.log(fnlAns);
display.innerHTML = fnlAns;}

function dotFn(){console.log('dot');}
