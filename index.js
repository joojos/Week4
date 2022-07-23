pointCount = 0;

function decimalCount(num){
    numString = num.toString();
    check = numString.includes('.');
    if (check===true) {
        pointCount = numString.split('.')[1].length;
     };
}

function add(a,b){
    addResult = a + b;
    console.log(addResult);
    decimalCount(addResult);
    if(pointCount>5){
        addResult = addResult.toFixed(5);
    }
    return addResult; 
 }
 
 function subtract(a,b){
    subtractResult= a - b;
    console.log(subtractResult);
    decimalCount(subtractResult);
    if(pointCount>5){
        subtractResult = subtractResult.toFixed(5);
    }
    
     return subtractResult;
 }
 
 function multiply(a,b){
     multiplyResult = a * b;
     console.log(multiplyResult);
     decimalCount(multiplyResult);
     if(pointCount>5){
          multiplyResult = multiplyResult.toFixed(5);
     }
     return multiplyResult;
 }
 
 function divide(a,b){
    if(b==0){
        divideResult = "Nope!";
     }else{
        divideResult = a/b;
        console.log(divideResult);
        decimalCount(divideResult);
        if(pointCount>5){
            divideResult = divideResult.toFixed(5);
       }
     }

     return divideResult;
 }


arr = [];
arr2= [];
n= 0;
secondNO = null;
operation = 0;
pointNO=0;
number_ofoperations= 1;
setmoreNO = 0;

function defineParameters(number1){
    view = document.querySelector("#displayview");
    if(operation == 0){
        if(number1=="." && pointNO==0){
            document.querySelector('.point').disabled = true;
            pointNO++;
        }
        firstNO = '';
        arr.push(number1);
        console.log(arr);

        for(let i=0; i<arr.length;i++){
            let string_arr = arr[i].toString();
            firstNO = firstNO + string_arr;
        }

        view.textContent = firstNO;
    }else {
        if(number1=="." && pointNO==0){
            document.querySelector('.point').disabled = true;
            pointNO++;
        }
        secondNO = '';
        arr2.push(number1);
        console.log(arr2);

        for(let i=0; i<arr2.length;i++){
            let string_arr = arr2[i].toString();
            secondNO = secondNO + string_arr;
        }

        view.textContent = secondNO;
        
    }  

}


function defineOP(i){
    operation = operation + 1;
    document.querySelector('.point').disabled = false;
    pointNO--;
    pointCount = 0;

    if(operation==1){
        a = parseFloat(firstNO);
        operation = 2;
    }
    if(operation>2){
        arr2=[];
        setmoreNO = setmoreNO + 1;
        if(setmoreNO>0){
            number_ofoperations= number_ofoperations + 2;
    
            if(n=="+"){
                b = parseFloat(secondNO);
                add(a,b);
                a = addResult;
            } else if(n=="-"){
                b = parseFloat(secondNO);
                subtract(a,b);
                a = subtractResult;
            } else if(n=="x"){
                b = parseFloat(secondNO);
                multiply(a,b);
                a = multiplyResult;
            } else {
                b = parseFloat(secondNO);
                divide(a,b);
                a = divideResult;
            }
            setmoreNO--;
    
        }
    
        operation--;
    }
    n = i;
}

function operate(n){
    document.querySelector('.point').disabled = false;
    pointNO--;
    pointCount = 0;

    if(n == 0 || secondNO == null){
        
    } else if(number_ofoperations==1){
        b = parseFloat(secondNO);
        if(n=="+"){
        add(a,b);
        view.textContent = addResult;
        a = addResult;
        arr2= [];
        } else if(n=="-"){
        subtract(a,b);
        view.textContent = subtractResult;
        a = subtractResult;
        arr2= [];
        } else if(n=="x"){
        multiply(a,b);
        view.textContent = multiplyResult;
        a = multiplyResult;
        arr2= [];
        } else {
        divide(a,b);
        view.textContent = divideResult;
        a = divideResult;
        arr2= [];
        }
        operation = 1;
    }else{
        b = parseFloat(secondNO);
        if(n=="+"){
        add(a,b);
        view.textContent = addResult;
        a = addResult;
        arr2= [];
        } else if(n=="-"){
        subtract(a,b);
        view.textContent = subtractResult;
        a = subtractResult;
        arr2= [];
        } else if(n=="x"){
        multiply(a,b);
        view.textContent = multiplyResult;
        a = multiplyResult;
        arr2= [];
        } else {
        divide(a,b);
        view.textContent = divideResult;
        a = divideResult;
        arr2= [];
        }
        number_ofoperations--;
    }
}

function clearView(){
    view.textContent = "0"; 
    arr = [];
    arr2= [];
    operation = 0;
    n = 0; 
    secondNO = null;
    number_ofoperations= 1;
    setmoreNO = 0;
    document.querySelector('.point').disabled = false;
    pointNO= 0;
    pointCount = 0;
    console.clear();
}


