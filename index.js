// question: 01

// you want to create a new object that contains only the key-value pairs that are common between two input objects based on their values.

const input1 = {a: 2, b: 2, i: 5, g: 4, h: 5};
const input2 = {a: 1, b: 2, h: 3, k: 4, h: 6};

// start:

const common={};
for(const key in input1){
    if ( input2.hasOwnProperty(key) && input1[key]===input2[key]){
common[key]=input1[key]
    }
}

console.log(common)


// question: 02

//find the second largest number in an array

const input = [7, 9, 8, 9,8, 10 ,6, 2, 1];

//start writing code:



const largest=-Infinity;
const secondLargest= -Infinity;
for(i=0; i<input.length; i++){
    if(input[i]>largest){
        secondLargest=largest
        largest=input[i]
    }else if(input[i]> secondLargest && input[i]!==largest){
        secondLargest=input[i];
    }
}

console.log(secondLargest);



