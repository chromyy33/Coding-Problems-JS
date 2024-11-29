// Majority Vote
// Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

// Examples
// majorityVote(["A", "A", "B"]) ➞ "A"

// majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

// majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null
// Notes
// The frequency of the majority element must be strictly greater than 1/2.
// If there is no majority element, return null.
// If the array is empty, return null.

//Solution

function majorityVote(arr) {
  if (arr.length === 0) return null;
  //votesD=votes Dirstribution
  let votesD = {};

  for (let i = 0; i < arr.length; i++) {
    if (votesD[arr[i]])
      votesD[arr[i]] += 1; //if already in obj add 1 to current count
    else {
      votesD[arr[i]] = 1; //if not then initialize it with 1
    }
  }
  const arrD = Object.values(votesD); //arrD = votes distribution
  const canD = Object.keys(votesD); //canD = candidate distribution

  const isDraw = new Set(arrD).size > 1 ? false : true; //checking if all candidates got the same amount of votes
  if (isDraw) return null; //early return
  const [maxVote] = [...arrD].sort((a, b) => {
    return b - a;
  }); //finding the index of most voted candidate
  return canD[arrD.indexOf(maxVote)]; //returning the candidate based of index found in the votes arr
}
console.log(majorityVote(["A", "A", "A", "B", "C", "A"]));
console.log(majorityVote(["A", "B", "B", "A", "C", "C"]));

// Mutations Only: Zeroes to the End
// Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

// Examples
// zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

// zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

// zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

// zeroesToEnd([0, 0]) ➞ [0, 0]
// Notes
// You must mutate the original array.
// Keep the relative order of the non-zero elements the same.

function zeroesToEnd(arr) {
  //early return if no 0's and if there are only zeroes in the arr
  if (!arr.includes(0) || (new Set(arr).size === 1 && arr[0] === 0)) return arr;

  console.log("after 2"); //checking if the above statement is valid
  let countN = 0; //count for numbers
  let countZ = 0; // count for zeroes
  let mutArr = []; //intitalizing and empty array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      mutArr[countN] = arr[i];
      countN++; //increase  num count if not zero and replace at the index , that is num count,ex arr[i]=1,start at index 0 as count is zero and add to count
    } else {
      countZ++;
      mutArr[arr.length - countZ] = 0;
      //else increase zero count and start from the end
    }
  }
  return mutArr;
}
console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));
console.log([0, 0]);
