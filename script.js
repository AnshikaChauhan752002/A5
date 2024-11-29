// Question 1

function Find_Prod(){
    let arr = [5,1,2,3,4,5];
    let product = 1;

     for(let num of arr){
        product *= num;
     }
     console.log(product);
}

Find_Prod();

//Question 2

function Find_Sum(){
    let arr = [5,1,2,3,4,5];
    let sum = 0;

    for(let num of arr){
        sum = sum + num;
    }
    console.log(sum);
}

Find_Sum();

//Question 3

function findCount(){
    let count = 0;
    let A = [4,3,3,3,1,2];
    let K = [5,1,2,3,4,5];

    for(let num of A){
        if(num === K){
            count++;
        }
    }
    console.log(A,K);
}

findCount();

//Question 4

function findEvenOdd(){
    let A = [7,1,2,3,4,5,6,7];
    let B = Array(2).fill(0);

    for(let num of A){
        if(num%2 === 0){
            B[0] += num;
        }else{
            B[1] += num;
        }
    }
    console.log(B);
}

findEvenOdd();

//Question 5

function Find_Num(){
    let arr = [1,2,3,4,5,6];
    let num = 2;
    for(let element of arr){
        if(element == num){
            console.log(true);
        }else{
            console.log(false);
        }
    }
}
 
console.log(Find_Num());

//Question 6

function highAge(){
    let arr = [6,11,23,3,45,72,68];
    let result = arr.filter(age => age >= 18);

    console.log (result);
}

highAge();

//Question 7

function Inc_Arr(){
    let Arr = [5,1,2,3,4,5];
    let newArr = Arr.map(element => element + 1);

    console.log(newArr);
}

Inc_Arr();

//Question 8

function isAllPass(){
    let A = [7,13,89,45,98,67,45,54];

    for(let mark of A){
        if(mark < 32){
            console.log("NO");
        }
    }
    console.log("Yes");  
}

isAllPass();

//Question 9

function uniqueColorShirt(){
    let colors = [3,2,4,1,2,3];
    let colorCount = {};

    for(let color of colors){
        colorCount[color] = (colorCount[color] || 0) + 1;
    }
    const uniqueColor = Object.keys(colorCount).filter(color => colorCount[color] === 1);
    console.log(uniqueColor.length);
}

uniqueColorShirt();

//Question 10

function minAndMax(){
    let marks = [13,89,,45,98,67,45,54];
    let min = marks[0];
    let max = marks[0];
    
    for(let i=1 ; i<marks.length ; i++){
        if(marks[i] < min){
            min = marks[i];
        }
        if(marks[i] > max){
            max = marks[i];
        }
    }
    console.log(min,max);
}

minAndMax();