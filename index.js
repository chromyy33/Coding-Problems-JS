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

//typing test for my new keyboard :)

//This is a typing test for my new keyboard I am not at all good at typing as I do not folow the old coneventions of typing typing on the mac is much easier than an actual keyboard
//I dont know If I will be able to cope with this type of key board given that I have used similar ones in the past an I feel like the problem happens once I try and start typing fast and do not really register a feel an place ment for the keys now I were to learn to type again I would do it again but my current speed is really slow I need to pick up the pace. Now as the mac is in a screen width mode it is much better and all I am doing now is trying to type without looking at the keyboard with as much accuracy as possible but I do keep missing most of the keys and yes I am not PERFECT! I think what I need to do is try and cover the areas where I am weak and put some time and practise after it.

//
// Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:

// 1+1+2 == 2+1+1
// Also, assume that you have an infinite amount of coins.

// Your function should take an amount to change and an array of unique denominations for the coins:

//   countChange(4, [1,2]) // => 3
//   countChange(10, [5,2,3]) // => 4
//   countChange(11, [5,7]) //  => 0

// function convertChange(amount, coins) {
//     const dp = Array(amount + 1).fill(0);
//     dp[0] = 1; // There's one way to make 0 amount: no coins

//     for (const coin of coins) {
//       for (let i = coin; i <= amount; i++) {
//         dp[i] += dp[i - coin];
//       }
//     }

//     return dp[amount];

// }
// console.log(convertChange(10, [5, 2, 3]));
function countChange(amount, coins) {
  let count = 0;

  function helper(remaining, index) {
    console.log(`Checking amount: ${remaining}, using coin index: ${index}`);

    if (remaining === 0) {
      count++;
      console.log(`Found a way! Total ways so far: ${count}`);
      return;
    }

    if (remaining < 0 || index >= coins.length) {
      return;
    }

    // Use the current coin
    helper(remaining - coins[index], index);

    // Skip the current coin
    helper(remaining, index + 1);
  }

  helper(amount, 0);
  return count;
}

// console.log(countChange(10, [5, 2, 3]));

//Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

// Examples
// getHashTags("How the Avocado Became the Fruit of the Global Trade")
// ➞ ["#avocado", "#became", "#global"]

// getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
// ➞ ["#christmas", "#probably", "#will"]

// getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
// ➞ ["#surprise", "#parents", "#fruit"]

// getHashTags("Visualizing Science")
// ➞ ["#visualizing", "#science"]
// Notes
// If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
// Punctuation does not count towards a word's length.

function getHashTags(str) {
  // List of punctuation to remove,can be customized
  const punctuation = [",", ".", "!", "?", "'", '"', ":", ";", "-", "(", ")", "[", "]", "{", "}", "/"];

  // Split the string into words
  str =str.split(" ").map((word) => {
    // Remove punctuation by filtering out unwanted characters
    return word
      .split("")
      .filter((char) => !punctuation.includes(char))
      .join("");
  });

  //sort by lenght so that we have first theree big words
  const sortedArr = str.sort((a, b) => b.length - a.length);

  //slice by detemining if we have more or less than 3 words in the str
  const sliceLen = str.length < 3 ? str.length : 3;

  //return by maping and adding the # for each word and converting them to lowercase
  return sortedArr.slice(0, sliceLen).map((tag) => "#" + tag.toLowerCase());

}
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
console.log(getHashTags("Visualizing Science"));


