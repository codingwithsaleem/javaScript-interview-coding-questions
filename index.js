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

// question 3

Log in
Sign up for free
You said:

/**
 * Write a function that accepts a URL,
 * asynchronously sends a GET request to that URL, and returns the response data as JSON.
 *
 * Use fetch to retrieve the data.
 * Only the Promise API may be used.
 *
 * If the request fails, retry it up to 5 more times.
 * If all attempts fail, reject with the error message:
 * "The specified URL is unavailable".
 */

function get(url) {
  const maxAttempts = 6;

  function attempt(count) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .catch(error => {
        if (count < maxAttempts) {
          return attempt(count + 1);
        }

        return Promise.reject(
          new Error("The specified URL is unavailable")
        );
      });
  }

  return attempt(1);
}

get("https://interview.yandex-team.ru/ping")
  .then(data => console.log(data))
  .catch(error => console.error(error.message));




